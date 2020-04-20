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

  // //Añadir Meet alusuario
  // router.post("/addmeet", (req, res, next) => {
  //   const meetings = req.body.meetings;
  //   const newModel = new Model(meetings);
  //   newModel.push(meetings);
  //   newModel.save(function (err) {
  //     if (err) throw err;
  //     res.json(newModel.toJSON());
  //   });
  // });

  //   app.post('/todos', authenticate, (req, res) => {
  //     var content = req.body.content;
  //     var todo = new Todo();

  //     todo.content.push(content);

  //     todo.save(function(err) {
  //       if (err) throw err;
  //       res.json(todo.toJSON())
  //       //I am sending instead of sending the result for testing
  //     });

  // });

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
