const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport'),  LocalStrategy = require('passport-local').Strategy;

const session = require('express-session');
mongoose.connect('mongodb://localhost/test');

const index = require('./routes/index'),
      userRoute = require('./user/userRoute'),
      metricRoute = require('./metric/metricRoute'),
      classRoute = require('./class/classRoute'),
      authorRoute = require('./author/authorRoute'),
      projectRoute = require('./project/projectRoute');
      authRoute = require('./auth/authRoute');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use('/', index);
app.use('/user', userRoute);
app.use('/metric', metricRoute);
app.use('/class', classRoute);
app.use('/author', authorRoute);
app.use('/project', projectRoute);
app.use('/auth', authRoute);

app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));
app.use(passport.initialize())
app.use(passport.session())

module.exports = app;

