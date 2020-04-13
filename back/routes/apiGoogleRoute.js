const express = require("express");
const router = express.Router();
const passport = require("passport");
const ensureLogin = require("connect-ensure-login");
const User = require("../models/user");
const Meeting = require("../models/meetings");
const Place = require("../models/placeAction");
const Collaborator = require("../models/collaborator");

// to see raw data in your browser, just go on: http://localhost:3000/api
router.get("/meeting", (req, res, next) => {
  Meeting.find({}, (error, meetingsLocDB) => {
    if (error) {
      next(error);
    } else {
      res.status(200).json({
        temples: meetingsLocDB,
      });
    }
  });
});

// to see raw data in your browser, just go on: http://localhost:3000/api/someIdHere
router.get("/meeting/:id", (req, res, next) => {
  let meetingId = req.params.id;
  Meeting.findOne(
    {
      _id: meetingId,
    },
    (error, oneMeetingLocDB) => {
      if (error) {
        next(error);
      } else {
        res.status(200).json({
          temple: oneMeetingLocDB,
        });
      }
    }
  );
});

router.get("/place", (req, res, next) => {
  Place.find({}, (error, placesLocDB) => {
    if (error) {
      next(error);
    } else {
      res.status(200).json({
        temples: placesLocDB,
      });
    }
  });
});

// to see raw data in your browser, just go on: http://localhost:3000/api/someIdHere
router.get("/place/:id", (req, res, next) => {
  let placeId = req.params.id;
  Place.findOne(
    {
      _id: placeId,
    },
    (error, onePlaceLocDB) => {
      if (error) {
        next(error);
      } else {
        res.status(200).json({
          place: onePlaceLocDB,
        });
      }
    }
  );
});
router.get("/collaborator", (req, res, next) => {
  Collaborator.find({}, (error, collaboratorsLocDB) => {
    if (error) {
      next(error);
    } else {
      res.status(200).json({
        collaborators: collaboratorsLocDB,
      });
    }
  });
});

// to see raw data in your browser, just go on: http://localhost:3000/api/someIdHere
router.get("/collaborator/:id", (req, res, next) => {
  let collaboratorId = req.params.id;
  Collaborator.findOne(
    {
      _id: collaboratorId,
    },
    (error, oneCollaboratorLocDB) => {
      if (error) {
        next(error);
      } else {
        res.status(200).json({
          place: oneCollaboratorLocDB,
        });
      }
    }
  );
});

module.exports = router;
