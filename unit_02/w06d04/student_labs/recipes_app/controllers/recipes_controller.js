var express     = require('express');
var router = express.Router();
var recipes = require('../recipes.js');

router.get('/', function(req,res) {
	res.render('recipes/index', {
		recipes: recipes.seededRecipes
	});
});

router.get('/new', function(req, res) {
	res.render('recipes/new', {
		recipes: recipes.seededRecipes
	});
});

router.post('/', function(req, res) {
	var newRecipe = {
		title: req.body.title,
		veggie: req.body.veggie,
		imageUrl: req.body.imageUrl
	};
	console.log(req.body.imageUrl);
	recipes.seededRecipes.push(newRecipe);
	res.redirect('/recipes');
});

router.get('/:id', function(req,res) {
  var recipe = recipes.seededRecipes[req.params.id];

  res.render('recipes/show', {
    recipe: recipe
  });
});

module.exports = router;