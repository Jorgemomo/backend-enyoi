require("dotenv").config();

const { Strategy, ExtractJwt } = require("passport-jwt");
const secret = process.env.SECRET_KEY;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret,
};

const jwtStrategy = new Strategy(options, (payload, done) => {
  return done(null, payload);
});

module.exports = jwtStrategy;
