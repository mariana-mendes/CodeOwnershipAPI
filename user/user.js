
const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    login: String,
    password: String
  });

userSchema.methods.getName =  () => {
  
}

module.exports = mongoose.model('User', userSchema);