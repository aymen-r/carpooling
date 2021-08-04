const expressJwt = require("express-jwt");

const authorise = () => {
  const secret = process.env.SECRET;
  return expressJwt({
    secret,
    algorithms: ["HS256"],
    // isRevoked: isRevoked,
  }).unless({
    path: [
      { url: /\/trips(.*)/, methods: ["GET", "OPTIONS"] },
      { url: /\/request_trip(.*)/, methods: ["GET", "OPTIONS"] },
      "/users/login",
      "/users/register",
    ],
  });
};

async function isRevoked(req, payload, done) {
  if (payload.role !== "user") {
    done(null, true);
  }
  done();
}

module.exports = authorise;
