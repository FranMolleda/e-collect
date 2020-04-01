const express = require("express");
const User = require("../models/User");
const passport = require("passport");
const router = express.Router();
const _ = require("lodash");

const isLoggedIn = require("../lib/isLoggedMiddleware");

router.get("/signup", (req, res) => {
  res.json({ status: "Signup" });
});

router.post("/signup", async (req, res, next) => {
  const { username, password, email } = req.body;
  console.log(username, password, email);
  //Validamos que no haya campos vacíos
  try {
    if (!username || !password || !email) {
      res.json("Please, complete Username, Password or Email");
      //Ponemos return para evitar el error [ERR_HTTP_HEADERS_SENT]
      return;
    }
    //Si no existe User, creamos
    const existingUser = await User.findOne({ username });

    if (!existingUser) {
      const newUser = await User.create({ username, password, email });
      req.login(newUser, err => {
        res.json(newUser);
      });
      //metemos en "else" para evitar el error [ERR_HTTP_HEADERS_SENT]
    } else {
      res.json({ status: "User Exists" });
    }
  } catch (err) {
    next(err);
  }
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    //Metodo de passport
    req.login(user, err => {
      if (err) {
        return res.status(500).json({ message: "Server error" });
      }

      if (!user) {
        return res.json({ status: 401, message: "No User register" });
      }

      if (err) {
        console.log(err);
        return res.json({ status: 500, message: "authentication error" });
      }
      // _.pick hace copia superficial del objeto y devuelve los valores que le pasamos
      return res.json(_.pick(req.user, ["username", "password", "email"]));
    });
  })(req, res, next);
});

router.get("/logout", (req, res, next) => {
  if (req.user) {
    //Metodo de passport
    req.logout();
    return res.json({ status: "Log out" });
  } else {
    return res
      .status(401)
      .json({ status: "You have to be logged in to logout" });
  }
});
router.get("/profile/:username", async (req, res, next) => {
  const userProfile = req.params;
  console.log(userProfile);

  res.json(userProfile);
  /*return res
      .status(401)
      .json({ status: "You have to be logged in to logout" });*/
});

module.exports = router;
