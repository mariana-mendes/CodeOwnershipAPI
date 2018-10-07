const express = require('express');
const router = express.Router();
const app = express();
const User = require('../user/user')
const passport = require('passport')


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
module.exports = router;