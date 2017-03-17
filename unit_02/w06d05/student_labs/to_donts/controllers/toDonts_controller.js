var express = require('express');
var router = express.Router();
var dataArray = require('../data.js');

// index route
router.get('/', function(req, res) {
	res.render('index', {
		data: dataArray.seededToDonts
	});
});

// new todont route
router.get('/new', function(req, res) {
	res.render('new')
});



























// show route
router.get('/:id', function(req, res) {
	var todontId = dataArray.seededToDonts[req.params.id];

	res.render('show', {
		todont: todontId
	});
});




module.exports = router;