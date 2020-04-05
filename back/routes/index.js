const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Meet = require("../models/Meetings");
const { crudGenerator } = require("./crudModels");

router.get("/", (req, res, next) => {
  res.json({ status: "Welcome" });
});
router.use("/auth", require("./userAuth"));
router.use("/private", require("./privatePages"));
router.use(
  "/meet",
  crudGenerator(Meet, {
    populateFields: ["organizer", "participants"],
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

module.exports = router;
