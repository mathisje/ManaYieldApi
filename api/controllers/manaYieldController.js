'use strict';
let game = require('../models/gameModel.js');
//controller

exports.calculate = function(req, res) {
	//do stuff
	console.log('do stuff');
	console.log(req.body);
	console.log(res.body);

	let results = game.play(deckList, 100);

	res.json([1,2,3,4,5,6,7,8,9]);
};

let deckList = {
  byId: {
    'plains': {
      id: 'plains',
      count: 0
    },
    'island': {
      id: 'island',
      count: 0
    },
    'swamp': {
      id: 'swamp',
      count: 0
    },
    'mountain': {
      id: 'mountain',
      count: 0
    },
    'forest': {
      id: 'forest',
      count: 0
    }
  },
  allIds: ['plains','island','swamp','mountain','forest'],
  landCount: 0,
  spellCount: 0
};