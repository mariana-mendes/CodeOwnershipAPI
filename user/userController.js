const files = require('../static/staticFile')
const User = require('./user')

exports.get = (req, res, next) => {
    User.find(function (err, kittens) {
        if (err) return console.error(err);
        console.log(kittens);
    })
    res.status(200).send('uu');
};

exports.post = (req, res, next) =>{
    const newUser = new User(req.body);
      newUser.save(function (err, newUser) {
        if (err) return console.error(err);
        newUser.getName();
      });
    res.status(201).send('new')
}
exports.put = (req, res, next) =>  res.status(201).send('userPut')
exports.delete = (req, res, next) => res.status(200).send('userDelete')