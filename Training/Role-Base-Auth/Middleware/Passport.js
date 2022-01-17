const passport = require('passport');
const { Strategy, ExtractJwt } = require("passport-jwt");
const User = require("../models/User");
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET
};

module.exports = passport => {
  passport.use(
    new Strategy(opts, async (payload, done) => {
      console.log("This is payload: ",payload)
      await User.findById(payload.user_id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => {
          return done(null, false);
        });
    })
  );
};
