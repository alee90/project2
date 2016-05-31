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

//MUSIC > INDEX PG
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

//PLAY
router.get('/index/play', function(req, res) {
    console.log('!!====== PLAY ROUTE ======!!');
    // console.log(Music);
    Music.find().then(function(music) {
        res.render('play.ejs', {music});
        console.log(music[0].songs[0]);
    })
});

//INDIVIDUAL PLAY
router.get('/index/play/:id', function(req, res) {
    console.log(req.params);
    Music.findById(req.params.id).then(function(music) {
    console.log('!!========!!INDIV PLAY ROUTE!!========!!');
    console.log(music);
    res.render('indplay.ejs', {music})
    });   
});

//NEW
router.get('/index/new', function(req,res){
    console.log('!!====== NEW ROUTE ======!!');
    res.render('new.ejs');
})

//SEARCH
router.get('/index/search/', function(req,res){
    console.log('!!========!!SEARCH ROUTE!!========!!');
    res.render('search.ejs')
});

//POST SEARCH
router.post('/index/search', function(req,res){
    var search = req.body.search;
    console.log(search);
    res.redirect('/music/index/search/'+search);
});

//ACTUAL SEARCH
router.get('/index/search/:search', function(req,res){
    var x = req.params.search;
    spotifyApi.searchTracks(x)
    .then(function(data) {
        console.log(data.body.tracks.items)
        var thing = data.body
        // console.log('Search by '+x, thing.tracks.items[1]);
        // console.log(body.tracks)
        // res.json(data.body);
        res.render('searchres.ejs', {thing});
    }, function(err) {
        console.error(err);
    });
})

//EDIT
router.get('/index/play/:id/edit', function(req,res){
    console.log(req.params);
    Music.findById(req.params.id, function(err,music) {
        if(err) {
            console.log(err);
        }else {
            console.log('!!========!!EDIT ROUTE!!========!!');
            res.render('edit.ejs', {music})      }
    });
})

//UPDATE
router.put('/index/play/:id', function(req,res){
    console.log('!!========!!UPDATE ROUTE!!========!!');
    Music.findOneAndUpdate({
        _id: req.params.id
    }, req.body, function(err, music) {
        console.log(req.body);
    });
    res.redirect('/music/index/play');
});

//ALBUM INFO
router.get('/index/:album', function(req,res){
    var x = req.params.album;
    request('https://api.spotify.com/v1/artists/'+x+'/albums?market=US&album_type=album', function(err,response,thing){
        if(!err && response.statusCode == 200){
            var ass = JSON.parse(thing);
            console.log('================');
            console.log(ass);
            console.log('================');
            console.log('!!====== ALBUM ROUTE ======!!');
            res.render('album.ejs', {ass})
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
            console.log(body.tracks);
            // console.log(body.tracks[0].artists[0].name);
            console.log('================');
            console.log('!!====== SONGS ROUTE ======!!');
            res.render('songs.ejs', {body})
        }
    });
})

//DELETE FROM PLAY
router.delete('/index/play/:id',function(req, res) {
    Music.findOneAndRemove({_id: req.params.id}).then(function(err) {
        if(err){
            console.log(err);
        }
    console.log('!!========!!DELETE ROUTE!!========!!');
    res.redirect('/music/index/play');
    });
});

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


module.exports = router;