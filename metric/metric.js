const mongoose = require('mongoose');

var metricSchema = new mongoose.Schema({
    lines: String,
    classes: String,
    expertise:[
        {
          name: String,
          class_name: String,
          expertise_value:String,
          expertise_name: String,
          type: {
            type: { type: String }
          },
        }
      ],
    ownership: [
        {
          name: String,
          class_name: String,
          ownership_value:String,
          type: {
            type: { type: String }
          },
        }
      ]
});

module.exports = mongoose.model('Metric', metricSchema);