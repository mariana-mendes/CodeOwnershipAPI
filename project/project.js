
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: String,
    authors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Author' }]    
  });

projectSchema.methods.getName =  () => {
  
}

module.exports = mongoose.model('Project', projectSchema);