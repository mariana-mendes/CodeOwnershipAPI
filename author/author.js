const mongoose = require('mongoose');

var authorSchema = new mongoose.Schema({
    name: String,
    logins: [String],
});

module.exports = mongoose.model('Author', authorSchema);