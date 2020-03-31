const express = require("express");
const User = require("../models/User");
const passport = require("passport");

const router = express.Router();

router.post("/signup", async (req, res, next) => {
  const { username, password, email } = req.body;
  console.log(username, password, email);

  try {
    const newUser = await User.create({ username, password, email });
    req.login(newUser, err => {
      res.json(newUser);
    });
  } catch (err) {
    next(err);
  }
});

router.post("/login", passport.authenticate("local"));

module.exports = router;
