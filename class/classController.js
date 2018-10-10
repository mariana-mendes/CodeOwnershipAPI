const Class = require('./class')

exports.getAll = (req, res, next) => {
    Class.find(function (err, kittens) {
        if (err) return console.error(err);
        console.log(kittens);
    })
    res.status(200).send('uu');
};


exports.get = (req, res, next) => {
    Class.findById(req.params.login, function (err, classe) {
        if (err) return console.error(err);
        res.status(200).send(classe);
    })
};

exports.post = (req, res, next) =>{
    const newClass = new Class(req.body);
      newClass.save(function (err, newClass) {
        if (err) return console.error(err);
        newClass.getName();
      });
    res.status(201).send('new')
}
exports.put = (req, res, next) =>  res.status(201).send('classPut')
exports.delete = (req, res, next) => res.status(200).send('classDelete')