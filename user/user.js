
const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String
  });

  userSchema.methods.speak = function () {
    var greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  }
//   var User = mongoose.model('user', userSchema);

  module.exports = mongoose.model('User', userSchema);