
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: String,
    authors: String,
    metric: {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Metric"
              }
            }    
  });

projectSchema.methods.getName =  () => {
  
}

module.exports = mongoose.model('Project', projectSchema);