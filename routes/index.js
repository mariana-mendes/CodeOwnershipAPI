const express = require('express');
const router = express.Router();
const User = require('../user/user')
const jwt = require('jsonwebtoken')
const user_controller = require('../user/userController')
var cookieParser = require('cookie-parser');
router.use(cookieParser());


router.post('/register', (req, res, next) => {
    const newUser = new User(req.body);
    newUser.save(function (err, newUser) {
      if (err) return console.error(err);
    });

    jwt.sign({newUser}, 'secretKey', { expiresIn: '1000s'},  (err, token) =>{
        res.json({
            token
        })
    });
});

 
 router.post('/login', function(req, res){
    //Verificar se usuário existe 
    User.findById(req.params.login, function (err, user) {
        if (err) return console.error(err);
        jwt.sign({user}, 'secretKey', { expiresIn: '1000s'},  (err, token) =>{
            res.json({token})
            res.redirect('/user')
        });
    })
 });

 function verifyToken(req, res, next){
     const bearerHeader = req.headers.authorization;

     if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
     }else{
         res.sendStatus(404);
     }
 }
module.exports = router;