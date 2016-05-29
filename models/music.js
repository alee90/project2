//REQUIREMENTS
var mongoose = require('mongoose');

//SCHEMAS
var musicSchema = new mongoose.Schema({
	name: String,
	song: String,
	album: String,
	song_url: String,
});

//MAP THRU MONGOOSE
var Music = mongoose.model('Music', musicSchema);

//EXPORTS
module.exports = Music;
