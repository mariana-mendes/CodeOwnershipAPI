const mongoose = require('mongoose');

var metricSchema = new mongoose.Schema({
    ownership_pairs: {
      ownership:{
        value: String,
        author: String,
        class_name: String
      }
    },
    expertise_pairs: {
      expertise:{
        name: String,
        author: String,
        class_name: String,
        value: Number
      }
    }
    
});

module.exports = mongoose.model('Metric', metricSchema);