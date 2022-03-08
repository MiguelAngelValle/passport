const express = require("express");
const router = express.Router();

const { getJSON, saveJSON } = require("../utils/fileHelpers");

const passport = require("passport");
const path = require("path");

const isAuth = require("../utils/isAuth.js");

router.get("/", isAuth, (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/html/profile.html"));
});

module.exports = router;
