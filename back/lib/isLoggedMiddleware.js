const isLoggedIn = () => (req, res, next) => {
  if (req.user) {
    return next();
  } else {
    return res.json({ status: 401, message: "No User register" });
  }
};

const isLoggedOut = () => (req, res, next) => {
  if (!req.user) {
    return next();
  } else {
    return res.json({ status: 401, message: "No User register" });
  }
};

module.exports = { isLoggedIn, isLoggedOut };
