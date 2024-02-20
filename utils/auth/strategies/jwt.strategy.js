const { Strategy, ExtractJwt } = require("passport-jwt");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "veterinariaPetsLalala",
};

const jwtStrategy = new Strategy(options, (payload, done) => {
  return done(null, payload);
});

module.exports = jwtStrategy;
