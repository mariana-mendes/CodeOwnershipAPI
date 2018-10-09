const Author = require('./author')

exports.get = (req, res, next) => {
    Author.find(function (err, authors) {
        if (err) return console.error(err);
        console.log(authors);
    })
    res.status(200).send('uu');};

exports.getAll = (req, res, next) => {
        Author.find(function (err, author) {
            if (err) return console.error(err);
            console.log(author);
        })
        res.status(200).send('uu');};

exports.post = (req, res, next) =>{
    const newAuthor = new Author(req.body);
    newAuthor.save(function (err, newAuthor) {
      if (err) return console.error(err);
    });
    res.status(201).send(newAuthor)
}
exports.put = (req, res, next) =>  res.status(201).send('authorPut')
exports.delete = (req, res, next) => res.status(200).send('authorDelete')