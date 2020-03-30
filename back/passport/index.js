const passport = require("passport");
const User = require("./../models/user");

// Strategies
require("./strategies/localStrategy");

passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
  User.findById(id, (err, user) => {
    if (err) return cb(err);
    cb(null, user);
  });
});
