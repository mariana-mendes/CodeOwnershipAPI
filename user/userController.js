const files = require('../static/staticFile')
const User = require('./user')
// const mongoose = require('mongoose');

var fluffy = new User({ name: 'fluffy' });


exports.get = (req, res, next) => {
    User.find(function (err, kittens) {
        if (err) return console.error(err);
        console.log(kittens);
    })
    res.status(200).send('uu');
};

exports.post = (req, res, next) =>{
    fluffy.save(function (err, fluffy) {
        if (err) return console.error(err);
        fluffy.speak();
      });
    res.status(201).send('userPost')
}
exports.put = (req, res, next) =>  res.status(201).send('userPut')
exports.delete = (req, res, next) => res.status(200).send('userDelete')