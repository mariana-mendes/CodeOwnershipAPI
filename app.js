const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport'),  LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const FileStore = require('session-file-store')(session);

mongoose.connect('mongodb://localhost/test');

const index = require('./routes/index'),
      userRoute = require('./user/userRoute'),
      metricRoute = require('./metric/metricRoute'),
      classRoute = require('./class/classRoute'),
      authorRoute = require('./author/authorRoute'),
      projectRoute = require('./project/projectRoute');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use('/', index);
app.use('/user', userRoute);
app.use('/metric', metricRoute);
app.use('/class', classRoute);
app.use('/author', authorRoute);
app.use('/project', projectRoute);

app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));
app.use(passport.initialize())
app.use(passport.session())


passport.use(new LocalStrategy(
      { usernameField: 'email' },
      (email, password, done) => {
        axios.get(`http://localhost:5000/users?email=${email}`)
        .then(res => {
          const user = res.data[0]
          if (!user) {
            return done(null, false, { message: 'Invalid credentials.\n' });
          }
          if (password != user.password) {
            return done(null, false, { message: 'Invalid credentials.\n' });
          }
          return done(null, user);
        })
        .catch(error => done(error));
      }
));
    
    // tell passport how to serialize the user
    passport.serializeUser((user, done) => {
      done(null, user.id);
    });
    
    passport.deserializeUser((id, done) => {
      axios.get(`http://localhost:5000/users/${id}`)
      .then(res => done(null, res.data) )
      .catch(error => done(error, false))
    });

app.use(session({
      genid: (req) => {
        console.log('Inside session middleware genid function')
        console.log(`Request object sessionID from client: ${req.sessionID}`)
        return uuid() // use UUIDs for session IDs
      },
      store: new FileStore(),
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: true
    }))
    app.use(passport.initialize());
    app.use(passport.session());
    
    // create the homepage route at '/'
    app.get('/', (req, res) => {
      console.log('Inside the homepage callback')
      console.log(req.sessionID)
      res.send(`You got home page!\n`)
    })
    
    // create the login get and post routes
    app.get('/login', (req, res) => {
      console.log('Inside GET /login callback')
      console.log(req.sessionID)
      res.send(`You got the login page!\n`)
    })
    
    app.post('/login', (req, res, next) => {
      console.log('Inside POST /login callback')
      passport.authenticate('local', (err, user, info) => {
        console.log('Inside passport.authenticate() callback');
        console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
        console.log(`req.user: ${JSON.stringify(req.user)}`)
        req.login(user, (err) => {
          console.log('Inside req.login() callback')
          console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
          console.log(`req.user: ${JSON.stringify(req.user)}`)
          return res.send('You were authenticated & logged in!\n');
        })
      })(req, res, next);
    })
    
    app.get('/authrequired', (req, res) => {
      console.log('Inside GET /authrequired callback')
      console.log(`User authenticated? ${req.isAuthenticated()}`)
      if(req.isAuthenticated()) {
        res.send('you hit the authentication endpoint\n')
      } else {
        res.redirect('/')
      }
    })
module.exports = app;

