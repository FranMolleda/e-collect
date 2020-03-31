const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../../models/User");
const bcrypt = require("bcrypt");

passport.use(
  new LocalStrategy(
    { passReqToCallback: true },
    (req, username, password, next) => {
      User.findOne({ username }, (err, user) => {
        if (err) return next(err);
        if (!user)
          return next(null, false, {
            message: "¡Username or password incorrect!"
          });
        if (!bcrypt.compareSync(password, user.password))
          return next(null, false, {
            message: "¡Username or password incorrect!"
          });
        return next(null, user, { message: `Welcome ${username}` });
      });
    }
  )
);
