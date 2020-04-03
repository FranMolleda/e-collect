const isLoggedIn = (redirectRoute = "/") => (req, res, next) => {
  if (req.user) {
    return next();
  } else {
    const err = new Error("Unauthorized");
    res.json({ status: "Unauthorized" });
    next(err);
    return res.redirect(redirectRoute);
  }
};

const isLoggedOut = (redirectRoute = "/") => (req, res, next) => {
  if (!req.user) {
    return next();
  } else {
    req.flash("You are already logged in");
    return res.redirect(redirectRoute);
  }
};

module.exports = { isLoggedIn, isLoggedOut };
