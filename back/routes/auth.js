const express = require("express");
const User = require("../models/User");
const passport = require("passport");

const router = express.Router();

router.post("/signup", async (req, res, next) => {
  //Lo que recibiremos del formulario del front (debo meter los datos que necesito del modelo)
  const { username, password, email } = req.body;
  console.log(username, password, email);

  //Creamos el User
  try {
    const newUser = await User.create({ username, password, email });
    res.json(newUser);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
