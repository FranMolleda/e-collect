const express = require("express");
const _ = require("lodash");
const { asyncController } = require("../bin/middleware/asyncController");

//A crudGenerator le pasamos Model para indicar que modelo queremos utilizar
//PortectedFields lo creamos para que nadie pueda crear campos en nuestros modelos. En app.js indicamos qué campo protejeremos
const crudGenerator = (Model, createProtectecFields = []) => {
  //Debemos meter el router dentro de la función para que cambie la información según el modelo que pasemos
  const router = express.Router();
  //Fields
  //Llamamos a todos los campos que podemos obtener de las colecciones que hemos incluido en el app.js y le decimos que campos no queremos
  const allFields = Object.keys(Model.schema.paths);
  const createFields = _.without(
    allFields,
    ...["_id", "__v", "createdAt", "updatedAt", ...createProtectecFields]
  );
  //Esta ruta es un helper para ver que campos podemos editar de todos los modelos
  router.get(
    "/fields",
    asyncController(async (req, res, next) => {
      return res.json({ fields: createFields });
    })
  );

  //Recibimos todos los Encuentros
  router.get(
    "/",
    asyncController(async (req, res) => {
      const allMeetings = await Model.find();
      res.json({ allMeetings });
    })
  );

  router.get("/joinin", (req, res, next) => {
    if (req.user) return res.json(req.user);
    else return res.status(401).json({ status: "No user session present" });
  });

  //Create a object in Models
  router.post(
    "/create",
    asyncController(async (req, res, next) => {
      //_.pick es para filtrar y aegurarnos que nadie pueda meternos datos que no queramos. Le decimos que solo coja del req.body los campos que aparecen en createFields
      const data = _.pick(req.body, createFields);
      console.log(data);

      const obj = await Model.create(data);
      return res.json(obj);
    })
  );

  //Borramos los User
  router.get(
    "/delete/:id",
    asyncController(async (req, res, next) => {
      const { id } = req.params;
      await Model.findByIdAndRemove(id);
      return res.json({ status: "Meeting deleted", id });
    })
  );
  return router;
};

module.exports = { crudGenerator };

/*Pasos para crear el crudGenerator (No deja de ser una función que devuelve un router):
- creamos: const crudGenerator = Model => {} Pasando Model como parametro para pasar posteriormente los modelos que tengamos
- devolvemos: return router
- exportamos: module.exports = { crudGenerator }
-en app.js: 
const User = require("./models/user");
const Meet = require("./models/meetings");
const { crudGenerator } = require("./routes/crudModels");
app.use("/meet", crudGenerator(Meet));
app.use("/user", crudGenerator(User));
-Creamos un endpoint "fields" para controlar los diferentes campos que tiene cada modelo

*/
