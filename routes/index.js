const express = require('express');
const router = express.Router();
const app = express();
const User = require('../user/user')
const passport = require('passport')
var session = require('express-session');
var cookieParser = require('cookie-parser');
router.use(cookieParser());
router.use(session({secret: "Your secret key"}));


router.use(passport.initialize())
    
router.get('/', (req, res, next) => 
        res.status(200).send({ app: "running"})
    );


router.get('/register', (req, res, next) => 
///validar 
    res.status(200).send({ app: "register view"})
);

router.post('/register', (req, res, next) => {
    const newUser = new User(req.body);
    newUser.save(function (err, newUser) {
      if (err) return console.error(err);
    });

    req.login(newUser._id, function(){
        res.redirect('/');
    })
});

function checkSignIn(req, res){
    if(req.session.user){
       next();     //If session exists, proceed to page
    } else {
       var err = new Error("Not logged in!");
       console.log(req.session.user);
       next();  //Error, trying to access unauthorized page!
    }
 }
 router.get('/protected_page', checkSignIn, function(req, res){
     res.redirect('/project')
 });
 
 router.get('/login', function(req, res){
    res.send('login');
 });
 
 router.post('/login', function(req, res){
     console.log(req.body);
    if(!req.body.login || !req.body.password){
       res.send('login invalid');
    } else {
        User.find(function (err, users) {
            if (err) {
                return console.error(err);
            }else{
                // users.filter(function(user){
                //     if(user.login === req.body.login){
                //       return  res.redirect('/protected_page');
                //     }
                // })
            }
        })
    }
 });
 
 router.get('/logout', function(req, res){
    req.session.destroy(function(){
       console.log("user logged out.")
    });
    res.redirect('/login');
 });
 
 router.use('/protected_page', function(err, req, res, next){
 console.log(err);
    //User should be authenticated! Redirect him to log in.
    res.redirect('/login');
 });
 
module.exports = router;