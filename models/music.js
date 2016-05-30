//REQUIREMENTS
var mongoose = require('mongoose');

//SCHEMAS
var musicSchema = new mongoose.Schema({
	name: String,
	spotify_id: String,
	songs: Array,
	song_url: Array,
});

//MAP THRU MONGOOSE
var Music = mongoose.model('Music', musicSchema);

//EXPORTS
module.exports = Music;
