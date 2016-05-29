//REQUIREMENTS
var express = require('express');
var router = express.Router();
var Music = require('../models/music.js');

//SEED PRODUCTS
router.get('/newsong',function(req,res) {
	var music = [
		{
			name: 'Britney Spears',
			song: '...Baby One More Time',
			album: '...Baby One More Time',
			song_url: 'https://open.spotify.com/track/3MjUtNVVq3C8Fn0MP3zhXa'
		}{
			name: 'Britney Spears',
			song: 'Stronger',
			album: 'Oops!... I Did It Again',
			song_url: 'https://open.spotify.com/track/5QhBKPqsnX1uY9fZNaAtZg'
		}{
			name: 'Britney Spears',
			song: 'Oops!... I Did It Again',
			album: 'Oops!... I Did It Again',
			song_url: 'https://open.spotify.com/track/6naxalmIoLFWR0siv8dnQQ'
		}{
			name: 'Britney Spears',
			song: 'Toxic',
			album: 'In The Zone',
			song_url: 'https://open.spotify.com/track/6I9VzXrHxO9rA9A5euc8Ak'
		}{
			name: 'Britney Spears',
			song: 'Get Naked (I Got a Plan)',
			album: 'Blackout',
			song_url: 'https://open.spotify.com/track/0PGxTaUcMggyJxTyLy0uOx'
		}{
			name: 'Christina Aguilera',
			song: 'Beautiful',
			album: 'Stripped',
			song_url: 'https://open.spotify.com/track/3TCauNPqFiniaYHBvEVoHG'

		}{
			name: 'Christina Aguilera',
			song: 'Genie in a Bottle',
			album: 'Christina Aguilera',
			song_url: 'https://open.spotify.com/track/6onLnWywmbSnXDFPVY1mM6'

		}{
			name: 'Christina Aguilera',
			song: 'Sex for Breakfast',
			album: 'Bionic',
			song_url: 'https://open.spotify.com/track/3kKBv9ppUpw32E32I1nByv'

		}{
			name: 'Christina Aguilera',
			song: 'Prima Donna',
			album: 'Bionic'm
			song_url: 'https://open.spotify.com/track/5AHbaTxXFe6d9wnnUSLpqQ'

		}{
			name: 'Christina Aguilera',
			song: 'Still Dirrty',
			album: 'Back to Basics',
			song_url: 'https://open.spotify.com/track/48oSyEFxLteFCLiVOiZoSi'

		}{
			name: 'Backstreet Boys',
			song: 'As Long as You Love Me',
			album: 'Backstreet Boys',
			song_url: 'https://open.spotify.com/track/00WvmRXTkPBZNhhRK3xfdy'

		}{
			name: 'Backstreet Boys',
			song: 'I Need You Tonight',
			album: 'Millennium',
			song_url: 'https://open.spotify.com/track/00WvmRXTkPBZNhhRK3xfdy'

		}{
			name: 'Backstreet Boys',
			song: 'I Want It That Way',
			album: 'Millennium',
			song_url: 'https://open.spotify.com/track/47BBI51FKFwOMlIiX6m8ya'

		}{			
			name: 'Backstreet Boys',
			song: 'Get Another Boyfriend',
			album: 'Black & Blue'
			song_url: 'https://open.spotify.com/track/3nx5PkGa2sJyXVJzqE4eYM'

		}{			
			name: 'Backstreet Boys',
			song: 'My Beautiful Woman',
			album: 'Never Gone',
			song_url: 'https://open.spotify.com/track/7rwOai4X9GjSJONKqcrNF1'

		}{
			name: '*NSYNC',
			song: 'No Strings Attached',
			album: 'No Strings Attached',
			song_url: 'https://open.spotify.com/track/6wOlzyu9hqu4Tjk0kPNv6e'

		}{
			name: 'Christina Aguilera',
			song: 'Still Dirrty',
			album: 'Back to Basics',
			song_url: 'https://open.spotify.com/track/48oSyEFxLteFCLiVOiZoSi'

		}{
			name: 'Backstreet Boys',
			song: 'As Long as You Love Me',
			album: 'Backstreet Boys',
			song_url: 'https://open.spotify.com/track/00WvmRXTkPBZNhhRK3xfdy'

		}{
			name: 'Backstreet Boys',
			song: 'I Need You Tonight',
			album: 'Millennium',
			song_url: 'https://open.spotify.com/track/00WvmRXTkPBZNhhRK3xfdy'

		}{
			name: 'Backstreet Boys',
			song: 'I Want It That Way',
			album: 'Millennium',
			song_url: 'https://open.spotify.com/track/47BBI51FKFwOMlIiX6m8ya'

		}{			
			name: 'Christina Aguilera',
			song: 'Beautiful',
			album: 'Stripped'
			song_url: 'https://open.spotify.com/track/3TCauNPqFiniaYHBvEVoHG'

		}{			
			,];

	Movies.create(user, function(err) {
		  console.log("SEED: NEW USER CREATED!");
		  res.redirect('/seed');
	});
});

//SEED
router.get('/', function(req,res){
	console.log(Movies);
	res.json(Movies);
})

//EXPORTS
module.exports = router;