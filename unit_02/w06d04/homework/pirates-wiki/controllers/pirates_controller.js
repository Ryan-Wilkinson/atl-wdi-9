//requirements
var express = require("express");
var router = express.Router();
var piratesArray = require('../models/pirates.js');

// home array
router.get('/', function(req, res) {
	res.render('index', {
		pirates: piratesArray
	});
});

// new pirate
router.get("/new", function(req, res) {
	res.render("new", {
	});
});

// specific pirate
router.get('/:id', function(req,res) {
  var aPirate = piratesArray[req.params.id];

  res.render('show', {
    pirates: aPirate
  });
});

router.post("/", function(req, res) {
	piratesArray.push(req.body);
	res.redirect("/pirates");
});

//exports
module.exports = router;