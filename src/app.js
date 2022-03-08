const express = require('express');
const passport = require('passport');
const path = require('path');
const cookieSession = require('cookie-session');

const authRouter = require('./routes/auth.route');
const profileRouter = require('./routes/profile.route');

const app = express();

app.use(express.json());

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ['clave'] 
}));

app.use(passport.initialize());
app.use(passport.session());

require('dotenv').config();
require('./config/passport');

app.use('../public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/home.html'));
}); 

app.use('/auth', authRouter);
app.use('/profile', profileRouter);

module.exports = app;
