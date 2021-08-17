const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    console.log("this is admin");
    next();
  } else {
    res.status(401).send("not authorized as admin");
  }
};

module.exports = admin;
