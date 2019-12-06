const mongoose = require('mongoose');

var dvdSchema = mongoose.Schema({
	name: String,
	adresse: String,
	nameFilm : String,
	dateLocation : Date,
	dateLocationEnd : Date,
},{ timestamps: { createdAt: 'created_at' }})

module.exports = mongoose.model('DVD', dvdSchema);