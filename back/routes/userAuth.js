const express = require("express");
const User = require("../models/user");
const Meetings = require("../models/meetings");
const passport = require("passport");
const router = express.Router();
const _ = require("lodash");
const { isLoggedIn } = require("../lib/isLoggedMiddleware");

router.get("/signup", (req, res) => {
  res.json({ status: "Signup" });
});

router.post("/signup", async (req, res, next) => {
  const { username, password, email, profilePic } = req.body;
  console.log(username, password, email, profilePic);
  try {
    if (!username || !password || !email) {
      res.json("Please, complete Username, Password or Email");
      return;
    }
    const existingUser = await User.findOne({ username });

    if (!existingUser) {
      const newUser = await User.create({
        username,
        password,
        email,
        profilePic,
      });
      req.login(newUser, (err) => {
        res.json(newUser);
      });
    } else {
      req.login(req.user, (err) => {
        res.json({ status: "User Exists" });
      });
    }
  } catch (err) {
    next(err);
  }
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    req.login(user, async (err) => {
      if (err) {
        return res.status(500).json({ message: "Server error" });
      }

      const userFound = await User.findById({ _id: req.user._id }).populate(
        "meetings"
      );
      console.log(userFound);
      return res.json(
        _.pick(userFound, [
          "username",
          "password",
          "email",
          "id",
          "profilePic",
          "meetings",
        ])
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
  if (req.user) return res.json({ status: "Added Meet to user", user });
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

router.get("/whoami", async (req, res, next) => {
  try {
    const userId = req.user._id;
    const userFound = await User.findById(userId).populate("meetings");
    return res.json(userFound);
  } catch (error) {
    return res.status(401).json({ status: "No user session present" });
  }
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
