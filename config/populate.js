const authors = require('../restoredb/authors')
const classes = require('../restoredb/classes')
const Author = require('../author/author')
const Class = require('../class/class')
const Project = require('../project/project')
const Metric = require('../metric/metric')

function populate() {
      // save authors to bd
      authors.forEach(element => {
            const newAuthor = new Author(element);
            const a = newAuthor.save().then((a) => {
                  // console.log(a)
            })
      });

      randNum = () => Math.floor((Math.random() * 11) + 0);

      //post classes 
      Author.find((err, author) => author).then((data) => {
            let nomes = ["Projeto de LP2", "Projeto de SI2", "Projeto de seila"]
            nomes.forEach(proj => {
                  classes.forEach((c, index) => {
                        let random = [data[randNum()]._id, data[randNum()]._id, data[randNum()]._id];
                        new Class({ name: c, authors: random, lines: randNum() }).save().then(() => {
                              createMetric(random, c).save().then((metric) => {
                                    if (index == classes.length - 1) {
                                          new Project({ name: proj, authors: random, metric: metric }).save()
                                    }

                              });
                        })
                  });
            });
      });

      randNumClass = () => (Math.floor((Math.random() * 100) + 1));

      createMetric = (array, nome) => {
            let pairs = {
                  ownership: {
                        value: String(randNumClass()),
                        author: array[1].name,
                        class_name: nome
                  }
            }
            const e = ["Herança", "Teste", "Exception", "Polimorfismo", "Interface"]
            let exp = {
                  expertise: {
                        name: e[Math.floor((Math.random() * 4) + 0)],
                        author: array[0].name,
                        class_name: nome,
                        value: randNumClass()
                  }
            }
            let newMetric = new Metric({ ownership_pairs: pairs, expertise_pairs: exp });
            return newMetric
      }
}
module.exports = populate;
