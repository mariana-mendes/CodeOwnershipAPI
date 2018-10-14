const express = require('express');
const router = express.Router();
const User = require('../user/user')
const jwt = require('jsonwebtoken')
var cookieParser = require('cookie-parser');
router.use(cookieParser());


router.post('/register', (req, res, next) => {
    const newUser = new User(req.body);
    newUser.save(function (err, newUser) {
      if (err) return console.error(err);
    });

    req.login(newUser._id, function(){
        res.redirect('/');
    })
});

 router.get('/protected_page', verifyToken, function(req, res){
    jwt.verify(req.token, 'secretKey', (err, authData) =>{
        if(err){
            console.log(authData);
            res.sendStatus(403)
        }else{
            res.redirect('/project')
            // res.send(authData);
        }
    })
 });
 
 router.post('/login', function(req, res){
    //Verificar se usuário existe 
    const userMock = {
        id:1,
        login: 'maria',
        password: 'wdasdasd'
    }

    jwt.sign({userMock}, 'secretKey', { expiresIn: '1000s'},  (err, token) =>{
        res.json({
            token
        })
       
    });
 });

 function verifyToken(req, res, next){
     const bearerHeader = req.headers.authorization;
     console.log(bearerHeader);
     if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        console.log(req.token);
        next();
     }else{
         res.sendStatus(404);
     }

 }

module.exports = router;