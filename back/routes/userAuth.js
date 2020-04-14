const express = require("express");
const User = require("../models/user");
const passport = require("passport");
const router = express.Router();
const _ = require("lodash");
const { isLoggedIn } = require("../lib/isLoggedMiddleware");

router.get("/signup", (req, res) => {
  res.json({ status: "Signup" });
});

router.post("/signup", async (req, res, next) => {
  const { username, password, email } = req.body;
  console.log(username, password, email);
  try {
    if (!username || !password || !email) {
      res.json("Please, complete Username, Password or Email");
      return;
    }
    const existingUser = await User.findOne({ username });

    if (!existingUser) {
      const newUser = await User.create({ username, password, email });
      req.login(newUser, (err) => {
        res.json(newUser);
      });
    } else {
      res.json({ status: "User Exists" });
    }
  } catch (err) {
    next(err);
  }
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    req.login(user, (err) => {
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
      return res.json(
        _.pick(req.user, ["username", "password", "email", "id"])
      );
    });
  })(req, res, next);
});

router.get("/logout", isLoggedIn(), (req, res, next) => {
  if (req.user) {
    req.logout();
    return res.json({ status: "Log out" });
  } else {
    return res
      .status(401)
      .json({ status: "You have to be logged in to logout" });
  }
});

router.get("/profile", isLoggedIn(), (req, res, next) => {
  if (req.user) return res.json(req.user);
  else return res.status(401).json({ status: "No user session present" });
});

//Loggin Social Slack
router.get("/slack", passport.authenticate("slack"));
router.get(
  "/slack/callback",
  passport.authenticate("slack", {
    successRedirect: "/signup",
    failureRedirect: "/", // here you would navigate to the classic login page
  })
);

router.get("/whoami", (req, res, next) => {
  if (req.user) return res.json(req.user);
  else return res.status(401).json({ status: "No user session present" });
});

//Loggin Social Google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/signup",
    failureRedirect: "/", // here you would redirect to the login page using traditional login approach
  })
);

module.exports = router;
