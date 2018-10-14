const User = require('./user')
const jwt = require('jsonwebtoken')

exports.getAll = (req, res, next) => {
    User.find(function (err, kittens) {
        if (err) return console.error(err);
        console.log(kittens);
    })
    res.status(200).send('uu');
};


exports.get = (req, res, next) => {
    jwt.verify(req.token, 'secretKey', (err, authData) =>{
        if(err){
            console.log(req.token);

            res.sendStatus(403)
        }else{
            User.findById(req.params.login, function (err, user) {
                if (err) return console.error(err);
                res.status(200).send(user);
            })
        }
    })
};

exports.post = (req, res, next) =>{

    let user = new User(req.body);
  
    user.generateHash(req.body.password)
        .then((hash) => {
            user.password = hash;
            user.save((err, createdUser) => {
                if (err && err.name === 'MongoError' && err.code === 11000) {
                      res.status(403).json('error');
          } else if (err) {
            res.status(404).json(err);
          } else {
            res.status(200).json({ result: createdUser, msg: 'User created.' });
          }
            });
        })
        .catch((err) => {
            res.status(404).json(err);
        });
  };


exports.put = (req, res, next) =>  res.status(201).send('userPut')
exports.delete = (req, res, next) => res.status(200).send('userDelete')