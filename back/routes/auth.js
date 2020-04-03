const express = require("express");
const User = require("../models/User");
const passport = require("passport");
const router = express.Router();
const _ = require("lodash");

router.get("/signup", (req, res) => {
  res.json({ status: "Signup" });
});

//Recibimos todos los Users
router.get("/", async (req, res) => {
  const allUser = await User.find();
  res.json({ allUser });
});

//Creamos los User
router.post("/signup", async (req, res, next) => {
  const { username, password, email, city } = req.body;
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
      const newUser = await User.create({ username, password, email, city });
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

//Borramos los User
router.get("/delete/:id", async (req, res, next) => {
  const { id } = req.params;
  await User.findByIdAndRemove(id);
  return res.json({ status: "User deleted", id });
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

router.get("/profile", (req, res, next) => {
  if (req.user) return res.json(req.user);
  else return res.status(401).json({ status: "No user session present" });
});

//Loggin Social Slack
router.get("/slack", passport.authenticate("slack"));
router.get(
  "/slack/callback",
  passport.authenticate("slack", {
    successRedirect: "/signup",
    failureRedirect: "/" // here you would navigate to the classic login page
  })
);

//Loggin Social Google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email"
    ]
  })
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/signup",
    failureRedirect: "/" // here you would redirect to the login page using traditional login approach
  })
);

module.exports = router;
