//REQUIREMENTS
var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
var router = express.Router();

//API
var SpotifyWebApi = require('spotify-web-api-node');

//KEYS
var spotifyApi = new SpotifyWebApi({
        clientId : process.env.CLIENT_ID,
        clientSecret : process.env.CLIENT_SECRET,
        redirectUri : 'http://localhost:8888/callback'
    });

//INDEX
router.get('/', function(req,res){
    res.redirect('/index')
})


router.get('/thing', function(req,res){
// Get multiple albums 
spotifyApi.getArtistTopTracks('6Ff53KvcvAj5U7Z1vojB5o', 'US')
    .then(function(data) {
        res.json(data.body);
        console.log(data.body);
    }, function(err) {
        console.log('Something went wrong!', err);
  });
})

router.get('/album', function(req,res){
spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
  .then(function(data) {
    console.log('Artist albums', data.body);
    res.json(data.body);
  }, function(err) {
    console.error(err);
  });


})

router.get('/search', function(req,res){
spotifyApi.searchTracks('Love')
  .then(function(data) {
    console.log('Search by "Love"', data.body);
    res.json(data.body);
  }, function(err) {
    console.error(err);
  });
})
module.exports = router;