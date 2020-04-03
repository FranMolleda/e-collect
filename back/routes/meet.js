/*const express = require("express");
const Meet = require("../models/meetings");
const passport = require("passport");
const router = express.Router();
const _ = require("lodash");

//Join in collect

//Recibimos todos los Encuentros
router.get("/", async (req, res) => {
  const allMeetings = await Meet.find();
  res.json({ allMeetings });
});

router.get("/joinin", (req, res, next) => {
  if (req.user) return res.json(req.user);
  else return res.status(401).json({ status: "No user session present" });
});

router.post("/joinin", (req, res, next) => {
  if (req.user) return res.json(req.user);
  else return res.status(401).json({ status: "No user session present" });
});

//Organize a meeting
router.post("/organize", async (req, res, next) => {
  const dataMeet = ({
    title,
    hour,
    description,
    streetAddress,
    organizer,
    participants,
    city,
    country,
    postalCode,
    date
  } = req.body);

  console.log(
    title,
    hour,
    description,
    streetAddress,
    organizer,
    participants,
    city,
    country,
    postalCode,
    date
  );
  try {
    if (!hour || !description) {
      res.json("Please, complete Hour or description");
      return;
    }
    const existingMeeting = await Meet.findOne({ title });

    if (!existingMeeting) {
      const newMeet = await Meet.create(dataMeet);
      req.login(newMeet, err => {
        res.json(newMeet);
      });
    } else {
      res.json({ status: "Meet Exists" });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
*/
