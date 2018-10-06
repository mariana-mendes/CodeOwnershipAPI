const Metric = require('./metric')

exports.get = (req, res, next) => {
    Metric.find(function (err, kittens) {
        if (err) return console.error(err);
        console.log(kittens);
    })
    res.status(200).send('uu');
};

exports.getAll = (req, res, next) => {
    Metric.find(function (err, kittens) {
        if (err) return console.error(err);
        console.log(kittens);
    })
    res.status(200).send('uu');
};


exports.post = (req, res, next) =>{
    const newMetric = new Metric(req.body);
    newMetric.save(function (err, newMetric) {
        if (err) return console.error(err);
        newMetric.getName();
      });
    res.status(201).send('new')
}
exports.put = (req, res, next) =>  res.status(201).send('metricPut')
exports.delete = (req, res, next) => res.status(200).send('metricDelete')