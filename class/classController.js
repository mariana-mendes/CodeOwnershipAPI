const Project = require('./class')

exports.get = (req, res, next) => {
    res.status(200).send('uu');
};

exports.getAll = (req, res, next) => {
    res.status(200).send('uu');
}; 

exports.post = (req, res, next) =>{
    res.status(201).send('new')
}
exports.put = (req, res, next) =>  res.status(201).send('classPut')
exports.delete = (req, res, next) => res.status(200).send('classDelete')