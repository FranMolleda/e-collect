const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Meet = require("../models/Meetings");
const { crudGenerator } = require("./crudModels");
const _ = require("lodash");

router.get("/", (req, res, next) => {
  res.json({ status: "Welcome" });
});
router.use("/auth", require("./userAuth"));
router.use("/private", require("./privatePages"));
router.use(
  "/meet",
  crudGenerator(Meet, {
    populateFields: [
      { path: "participants", select: ["username", "city"] },
      { path: "organizer", select: "username" },
    ],
    extraFieldsCreate: (req) => {
      if (!req.user)
        throw new Error("To create a meeting you have to login first");
      return {
        organizer: req.user._id,
      };
    },
  })
);
router.use(
  "/user",
  crudGenerator(User, {
    populateFields: ["meetings"],
  })
);

// Movie.find().populate([
//   { path: "creator", select: "username" },
//   { path: "comments", populate: { path: "author", select: "username" } },
// ]);

module.exports = router;
