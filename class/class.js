const mongoose = require('mongoose');

var classSchema = new mongoose.Schema({
    name: String,
    authors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Author' }],
    lines: Number,    
    
});

module.exports = mongoose.model('Class', classSchema);