const express = require("express");
const User = require("../models/user");
const Meetings = require("../models/meetings");
const router = express.Router();

router.post("/:id/addmeet", async (req, res, next) => {
  try {
    console.log(req.user);
    const meetId = req.params.id;
    const userId = req.user.id;
    console.log(`Adding meet ${meetId} to user ${userId}`);
    const user = await User.findOneAndUpdate(
      { _id: userId },
      { $addToSet: { meetings: meetId } },
      {
        new: true,
      }
    ).populate("meetings");
    return res.json({ status: "Added Meet to user", user });
  } catch (error) {
    return res.status(401).json({ status: "Meet Not Found" });
  }
});

router.get("/usermeet", async (req, res, id) => {
  const listObj = await Model.find();
  res.json(listObj);
});
module.exports = router;
