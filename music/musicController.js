exports.get = (req, res, next) => {
    const musicExample = {
        id: 1,
        nome: 'Simple Death',
        artist: 'Chelsea Wolfe',
    }
    const response = req.params.id ? musicExample : 'get tds musicas'
    res.status(201).send(response);
};

exports.post = (req, res, next) => res.status(201).send('request')
exports.put = (req, res, next) =>  res.status(201).send('request')
exports.delete = (req, res, next) => res.status(200).send('request')