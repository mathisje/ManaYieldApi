'use strict';

//controller

exports.calculate = function(req, res) {
	//do stuff
	console.log('do stuff');
	console.log(req.body);
	console.log(res.body);
    res.json([1,2,3,4,5,6,7,8,9]);
};