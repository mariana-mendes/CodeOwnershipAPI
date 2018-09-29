
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    login: String,
    password: String,
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }]    

  });

userSchema.methods.getName =  () => {
  
}

module.exports = mongoose.model('User', userSchema);