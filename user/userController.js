const files = require('../static/staticFile')

exports.get = (req, res, next) => {
    const userExample = {
        login: 'Mariana-1',
    }
    const response = req.params.login ? userExample : 'get tds musicas'
    res.status(200).send(response);
};
exports.getLists = (req, res, next) => {
    res.status(201).send(files.all());
};

exports.received = (req, res) => { 
    res.status(201).send(files.received())
}

exports.recommended = (req, res) => { 
    res.status(201).send(files.recommended())
}

exports.favorite = (req, res) => { 
    res.status(201).send(files.favorite())
}
exports.post = (req, res, next) => res.status(201).send('userPost')
exports.put = (req, res, next) =>  res.status(201).send('userPut')
exports.delete = (req, res, next) => res.status(200).send('userDelete')