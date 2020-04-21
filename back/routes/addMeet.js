const express = require("express");
const User = require("../models/user");
const Meetings = require("../models/meetings");
const router = express.Router();

router.post("/user/addmeet", (req, res, next) => {
  const newMeeting = new Meetings(req.body);
  newMeeting.save();
  User.findByIdAndUpdate(
    { id: req.params.userId },
    { $push: { meetings: meetings.id } },
    { new: true }
  )
    .then((user) => {
      res.json(user);
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
