const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.post("/signup", async (req, res, next) => {
  //Lo que recibiremos del formulario del front (debo meter los datos que necesito del modelo)
  const { username, password } = req.body;

  //Creamos el User
  try {
    const newUser = await User.create({ username, password });
    res.json({ newUser });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
