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

module.exports = isLoggedIn;
