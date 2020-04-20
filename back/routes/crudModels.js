const express = require("express");
const _ = require("lodash");
const { asyncController } = require("../bin/middleware/asyncController");

const crudGenerator = (
  Model,
  { populateFields } = {
    createProtectecFields: [],
    extraFieldsCreate: () => ({}),
    populateFields: [],
  }
) => {
  const router = express.Router();

  //Recibimos listado del modelo
  router.get(
    "/",
    asyncController(async (req, res) => {
      const listObj = await Model.find().populate(populateFields);
      res.json(listObj);
    })
  );

  //Crear
  router.post(
    "/create",
    asyncController(async (req, res, next) => {
      const { username, title, company, zone } = req.body;
      const newModel = new Model(req.body);
      const existingName = await Model.findOne({ username });
      const existingTitle = await Model.findOne({ title });
      const existingCompany = await Model.findOne({ company });
      const existingZone = await Model.findOne({ zone });

      if (
        !existingName ||
        !existingTitle ||
        !existingCompany ||
        !existingZone
      ) {
        const obj = await newModel.save();
        return res.json(obj);
      }
      return res.json({ status: "Data exists" });
    })
  );

  //Obtener Uno
  router.get(
    "/:id",
    asyncController(async (req, res, next) => {
      const { id } = req.params;
      await Model.findOne({ _id: id })
        .populate(populateFields)
        .then((obj) => {
          res.json(obj);
        });
    })
  );

  //Editar
  router.put(
    "/edit/:id",
    asyncController(async (req, res, next) => {
      const { id } = req.params;
      Model.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      }).then((data) => res.json(data));
    })
  );
  router.post(
    "/edit",
    asyncController(async (req, res, next) => {
      const { id } = req.params;
      Model.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      }).then((data) => res.json(data));
    })
  );

  //Borrar
  router.delete(
    "/delete/:id",
    asyncController(async (req, res, next) => {
      const { id } = req.params;
      await Model.findByIdAndRemove(id);
      return res.json({ status: "Data deleted", id });
    })
  );
  return router;
};

module.exports = { crudGenerator };
