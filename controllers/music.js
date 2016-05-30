//REQUIREMENTS
var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
var router = express.Router();

//MODEL
var Music = require('../models/music.js');

//API
var SpotifyWebApi = require('spotify-web-api-node');

//KEYS
var spotifyApi = new SpotifyWebApi({
        clientId : process.env.CLIENT_ID,
        clientSecret : process.env.CLIENT_SECRET,
        redirectUri : 'http://localhost:8888/callback'
    });

//MUSIC-INDEX PG
router.get('/', function(req,res){
    res.redirect('/music/index')
})

//INDEX
router.get('/index', function(req, res) {
    console.log('!!====== INDEX ROUTE ======!!');
    // console.log(Music);
    Music.find().then(function(music) {
        res.render('index.ejs', {music});
    })
});

//SHOW
router.get('/index/:album', function(req,res){
    var x = req.params.album;
    request('https://api.spotify.com/v1/artists/'+x+'/albums?market=US&album_type=album', function(err,response,thing){
        if(!err && response.statusCode == 200){
            var ass = JSON.parse(thing);
            console.log('================');
            console.log(ass.items[0].name);
            console.log('================');
            console.log('!!====== SHOW ROUTE ======!!');
            res.render('show.ejs', {ass})
        }
    });
})

//SONGS LIST
router.get('/index/:album/songs', function(req,res){
    var x = req.params.album;
    request('https://api.spotify.com/v1/artists/'+x+'/top-tracks?country=US', function(err,response,thing){
        if(!err && response.statusCode == 200){
            var body = JSON.parse(thing);
            console.log('================');
            console.log(body.tracks[0].artists[0].name);
            console.log('================');
            console.log('!!====== SHOW ROUTE ======!!');
            res.render('songs.ejs', {body})
        }
    });
})

//NEW
router.get('/index/new', function(req,res){
    console.log('!!====== NEW ROUTE ======!!');
    res.render('new.ejs');
})

//POST
router.post('/index', function(req, res) {
    console.log(req.body);
    var music = new Music(req.body);
    music.save(function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log('******!!!!!!SAVED!!!!!!*******');
        }
    });
    res.redirect('/music/index/');
});

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