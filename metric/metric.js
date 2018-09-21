const mongoose = require('mongoose');

var metricSchema = new mongoose.Schema({
    lines: String,
    classes: String,
    expertise:[
        {
          name: String,
          class_name: String,
          expertise_value:String,
          expertise: name,
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

metricSchema.methods.getName =  () => {
  
}

module.exports = mongoose.model('Metrics', metricSchema);