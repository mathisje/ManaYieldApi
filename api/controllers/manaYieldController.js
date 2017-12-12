'use strict';

//controller

exports.calculate = function(req, res) {
	//do stuff
	console.log('do stuff');
	console.log(req.body);
	console.log(res.body);
    res.json(req.body);
};