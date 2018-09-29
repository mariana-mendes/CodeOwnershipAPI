const Project = require('./project')

exports.get = (req, res, next) => {
    console.log(req.params)
    Project.findById(req.params.project_id, function (err, project) {
        if (err) return console.error(err);
        console.log(project)
    })

    res.status(200).send('achou');
}


exports.getAll = (req,res, next) => {
    Project.find(function (err, kittens) {
        if (err) return console.error(err);
        console.log(kittens);
    })
    res.status(200).send('uug');
};

exports.post = (req, res, next) =>{
    const newProject = new Project(req.body);
    newProject.save(function (err, newProject) {
        if (err) return console.error(err);
        newProject.getName();
      });
      console.log(newProject);
    res.status(201).send('new')
}
exports.put = (req, res, next) =>  res.status(201).send('projectPut')
exports.delete = (req, res, next) => res.status(200).send('projectDelete')