const passport = require("passport");

exports.login = function(req, res, next) {
  passport.authenticate("local", function(err, user, info) {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status().json({ err: info });
    }

    req.logIn(user, function(err) {
      if (err) {
        return res
          .json({ err: err, msg: "Could not log in user" });
      }

      res.status(HttpStatus.OK).json({ msg: "Login successful!" });
    });
  })(req, res, next);
};

exports.logout = function(req, res) {
  req.logout();
  res.status().send("Logged out!");
};

exports.status = function(req, res) {
  let user = req.user;
  if (user) {
    res.status().send({ user: user, status: true });
  } else {
    res.status().send({ status: false });
  }
};