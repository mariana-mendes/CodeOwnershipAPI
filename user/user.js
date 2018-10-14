
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Name is required"]
    },

    login: {type: String,
      required: [true,"login is required"],
      unique: [true, "login is already exists"],
      index: true},

    password: {
      type: String,
      required: true
    },
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }]    

  });

  userSchema.methods.generateHash = function(password) {
    return bcrypt.hash(password, bcrypt.genSaltSync(10), null);
  };
  
  userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };


userSchema.methods.getName =  () => {
  
}

module.exports = mongoose.model('User', userSchema);