//REQUIREMENTS
var express = require('express');
var router = express.Router();
var Music = require('../models/music.js');

//SEED PRODUCTS
router.get('/newsong',function(req,res) {
	var music = [
		{
			name: 'Britney Spears',
			spotify_id: '26dSoYclwsYLMAKD3tpOr4',
			song: ['...Baby One More Time',
				'Stronger',
				'Oops!... I Did It Again',
				'Toxic',
				'Get Naked (I Got a Plan)',
				],
			song_url: ['https://open.spotify.com/track/3MjUtNVVq3C8Fn0MP3zhXa',
					 'https://open.spotify.com/track/5QhBKPqsnX1uY9fZNaAtZg',
					 'https://open.spotify.com/track/6naxalmIoLFWR0siv8dnQQ',
					 'https://open.spotify.com/track/6I9VzXrHxO9rA9A5euc8Ak',
					 'https://open.spotify.com/track/0PGxTaUcMggyJxTyLy0uOx',
					 ]
		},{
			name: 'Christina Aguilera',
			spotify_id: '1l7ZsJRRS8wlW3WfJfPfNS',
			song: ['Beautiful',
				'Genie in a Bottle',
				'Sex for Breakfast',
				'Prima Donna',
				'Still Dirrty',
				],
			song_url: ['https://open.spotify.com/track/3TCauNPqFiniaYHBvEVoHG',
					 'https://open.spotify.com/track/6onLnWywmbSnXDFPVY1mM6',
					 'https://open.spotify.com/track/3kKBv9ppUpw32E32I1nByv',
					 'https://open.spotify.com/track/5AHbaTxXFe6d9wnnUSLpqQ',
					 'https://open.spotify.com/track/48oSyEFxLteFCLiVOiZoSi',
					 ]

		},{
			name: 'Backstreet Boys',
			spotify_id: '5rSXSAkZ67PYJSvpUpkOr7',
			song: ['As Long as You Love Me',
				'I Need You Tonight',
				'I Want It That Way',
				'Get Another Boyfriend',
				'My Beautiful Woman',
				
				],
			song_url: ['https://open.spotify.com/track/00WvmRXTkPBZNhhRK3xfdy',
					 'https://open.spotify.com/track/5VjlmjJ1peXIjcuecCdfx1',
					 'https://open.spotify.com/track/47BBI51FKFwOMlIiX6m8ya',
					 'https://open.spotify.com/track/3nx5PkGa2sJyXVJzqE4eYM',
					 'https://open.spotify.com/track/7rwOai4X9GjSJONKqcrNF1',
					 ]

		},{
			name: '*NSYNC',
			spotify_id: '6Ff53KvcvAj5U7Z1vojB5o',
			song: ['No Strings Attached',
				'Up Against The Wall',
				'This I Promise You',
				'Girlfriend',
				'See Right Through You',
				],
			song_url: ['https://open.spotify.com/track/6wOlzyu9hqu4Tjk0kPNv6e',
					 'https://open.spotify.com/track/3ME2tArFXJxO2BJrmsGUrE',
					 'https://open.spotify.com/track/46n2EGFnPC3tzWCN1Aqe26',
					 'https://open.spotify.com/track/6u5flhVFxKZrl9AApvf2SL',
					 'https://open.spotify.com/track/0x0KmsdyPlkBlBjvpoOh9h',
					 ]

		},{		

			name: 'Spice Girls',
			spotify_id: '0uq5PttqEjj3IH1bzwcrXF',
			song: ['Wannabe',
				'Spice Up Your Life',
				'Stop',
				'Goodbye',
				'Oxygen',
				],
			song_url: ['https://open.spotify.com/track/1Je1IMUlBXcx1Fz0WE7oPT',
					 'https://open.spotify.com/track/5qGwqO0lkbBXw4xNfzT7SF',
					 'https://open.spotify.com/track/3FteycP8CaXS1MhjcXekVT',
					 'https://open.spotify.com/track/6ZNw9Cnc85OeHZrjMAZJfY',
					 'https://open.spotify.com/track/1qmAvaC7Zo3VSCQ3tTx4kq',
					 ]

		},];

	Music.create(music, function(err) {
		  console.log("!!======SEED: NEW MUSIC CREATED!======!!");
		  res.redirect('/seed');
	});
});

//SEED
router.get('/', function(req,res){
	console.log(Music);
	res.json(Music);
})

//EXPORTS
module.exports = router;