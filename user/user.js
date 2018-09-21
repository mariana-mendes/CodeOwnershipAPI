
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    login: String,
    password: String
  });

userSchema.methods.getName =  () => {
  
}

module.exports = mongoose.model('User', userSchema);