const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../lib/isLoggedMiddleware");

router.get("/joinin", isLoggedIn(), (req, res, next) => {
  if (req.user) return res.send({ message: "Success" });
  return res.status(401).send({ message: "you are not logged in" });
});
router.get("/organize", isLoggedIn(), (req, res, next) => {
  if (req.user) return res.send({ message: "Success" });
  return res.status(401).send({ message: "you are not logged in" });
});

module.exports = router;
