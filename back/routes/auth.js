const express = require("express");
const router = express.Router();

router.post("/signup", (req, res, next) => {
  //Lo que recibiremos del formulario del front (debo meter los datos que necesito del modelo)
  const { username, password } = req.body;
  console.log(username, password);
  res.json({ status: "Signup" });
});

module.exports = router;
