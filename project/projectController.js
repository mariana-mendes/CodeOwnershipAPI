const Project = require('./project')

exports.get = (req, res, next) => {
    Project.find(function (err, kittens) {
        if (err) return console.error(err);
        console.log(kittens);
    })
    res.status(200).send('uu');
};

exports.post = (req, res, next) =>{
    const newProject = new Project(req.body);
    newProject.save(function (err, newProject) {
        if (err) return console.error(err);
        newProject.getName();
      });
    res.status(201).send('new')
}
exports.put = (req, res, next) =>  res.status(201).send('projectPut')
exports.delete = (req, res, next) => res.status(200).send('projectDelete')