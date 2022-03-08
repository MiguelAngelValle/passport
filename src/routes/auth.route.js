const router = require("express").Router();
const passport = require("passport");
const path = require('path');

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/html/login.html'));
});

router.get('/google/redirect', (req, res) => {
  res.redirect('/');
});

router.get(
  "/google/login",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    console.log(req.query.code);
    // Successful authentication, redirect to “/”
    res.redirect("/profile");
  }
);

router.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
})

module.exports = router;
