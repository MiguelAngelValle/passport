const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const userModel = require('../models/user');

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: `http://localhost:3000/auth/google/callback`,
    },
    function (accessToken, refreshToken, profile, done) {
      console.log("working");
      console.log("accessToken", accessToken);
      console.log("refreshToken", refreshToken);
      console.log("profile", profile);

      const user = userModel.create(profile)
      return done(null, user)
    }
  )
);
/*
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  userModel.find(id)
    .then((user) => done(null, user))
    .catch((err) => done(err));
});
*/
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});