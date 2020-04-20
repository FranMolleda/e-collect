const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Meet = require("../models/meetings");
const PlaceAction = require("../models/placeAction");
const Collaborator = require("../models/collaborator");
const { crudGenerator } = require("./crudModels");
const _ = require("lodash");
import { upload, uploadCloudinaryAvatar } from "../middleware/uploader";

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
router.use(
  "/place",
  crudGenerator(PlaceAction, {
    populateFields: [{ path: "organizer", select: "username" }],
  })
);

router.use("/collaborator", crudGenerator(Collaborator));

router.post(
  "/profilepic",
  uploadCloudinaryAvatar.single("avatar"),
  async (req, res) => {
    console.log(req.file);
    const user = req.user;

    // if there was previous profile pic, delete it

    // Set the new profile pic
    user.profilePic = req.file;
    const updatedUser = await user.save();

    return res.json({ status: "Uploaded completed", user: updatedUser });
  }
);

const apiGoogleRoute = require("./apiGoogleRoute");

router.use("/api", apiGoogleRoute);

module.exports = router;
