const User = require('./user')

exports.getAll = (req, res, next) => {
    User.find(function (err, kittens) {
        if (err) return console.error(err);
        console.log(kittens);
    })
    res.status(200).send('uu');
};


exports.get = (req, res, next) => {
    User.findById(req.params.login, function (err, user) {
        if (err) return console.error(err);
    })
    res.status(200).send('achoous');
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