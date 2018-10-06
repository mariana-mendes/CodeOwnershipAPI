const Author = require('./author')

exports.get = (req, res, next) => {
    Author.find(function (err, kittens) {
        if (err) return console.error(err);
        console.log(kittens);
    })
    res.status(200).send('uu');};

exports.getAll = (req, res, next) => {
        Author.find(function (err, kittens) {
            if (err) return console.error(err);
            console.log(kittens);
        })
        res.status(200).send('uu');};

exports.post = (req, res, next) =>{
    const newAuthor = new Author(req.body);
    newAuthor.save(function (err, newAuthor) {
      if (err) return console.error(err);
    });
    console.log(newAuthor)
    res.status(201).send('new')
}
exports.put = (req, res, next) =>  res.status(201).send('authorPut')
exports.delete = (req, res, next) => res.status(200).send('authorDelete')