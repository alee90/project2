// REQUIREMENTS
var express = require('express');
var	app = express();
var	bodyParser = require('body-parser');
// var	db = process.env.MONGODB_URI || "mongodb://localhost/spotify_app";
var mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost/spotify_app';
var	methodOverride = require('method-override');
var	mongoose = require('mongoose');
var	morgan = require('morgan');
var	port = process.env.PORT || 3000;
var request = require('request');
var cookieParser = require('cookie-parser');
var http = require("http");

//API
var SpotifyWebApi = require('spotify-web-api-node');

// MIDDLEWARE
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride(function(req, res){
  	if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    	var method = req.body._method;
    	delete req.body._method;
    	return method;
  	}
}));

// DATABASE
// mongoose.connect(db);
mongoose.connect(mongoUri);

// CONTROLLERS
var music = require('./controllers/music.js');
app.use('/music', music);

//SEED
var seed = require('./controllers/seed.js');
app.use('/seed', seed);


// LISTEN
app.listen(port);
console.log('=============================');
console.log('Server running off PORT: ' + port);
console.log('=============================');
