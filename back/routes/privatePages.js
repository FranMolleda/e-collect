const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../lib/isLoggedMiddleware");

router.get("/joinin", isLoggedIn(), (req, res, next) => {
  if (req.user) {
    res.json(req.user);
  } else return res.status(401).json({ status: "No user session present" });
});
router.get("/organize", isLoggedIn(), (req, res, next) => {
  if (req.user) {
    res.json(req.user);
  } else return res.status(401).json({ status: "No user session present" });
});

module.exports = router;
// return res.json({ status: "Private page" })
