//======================
// REQUIREMENTS
//======================
//require express,router,  mongoose, List schema, User schema, authHelpers
var express = require('express');
router = express.Router({mergeParams: true});
var User = require('../models/user.js');
var List = require('../models/list.js');
var authHelpers = require('../helpers/auth.js');
var mongoose = require('mongoose');

//======================
// CREATE
//======================
//create a POST "/" route that saves the list item to the logged in user
router.get('/new', function(req, res) {
  User.findById(req.params.id)
    .exec(function(err, user) {
      if (err) {console.log(err);}
      console.log(user);
      res.render('lists/new.hbs', {
        user: user
      });
    });
});

router.post('/', function(req, res) {
  User.findById(req.params.id)
    .exec(function(err, user) {
      if (err) {console.log(err);}
      console.log(user);
      var newListItem = new List({
        name: req.body.name,
        completed: req.body.completed
      });
      newListItem.save();
      user.list.push(newListItem);
      user.save(function(err) {
        if (err) {console.log(err);}
        res.redirect('/users');
      });
    });
});

//======================
// EDIT
//======================
//create a GET "/:id/edit" route that renders the list's edit page
router.get('/:id/edit', function(req, res) {
	User.findById(req.params.id)
	.exec(function(err, user) {
		if(err){console.log(err);}

		var listItem = user.list.id(req.params.listId);
		res.render('lists/edit', {
			user: user,
			listItem: listItem
		});
	});
});

//======================
// UPDATE
//======================
//create a PUT "/:id" route that saves the changes from the list.
router.put('/:id', function(req, res) {
	User.findById(req.params.id)
	.exec(function(err, user) {
		if(err){console.log(err);}
		var listItem = user.list.id(req.params.listId);
		listItem.name = req.body.name;
		listItem.completed = req.body.completed;
		user.save(function(err, item) {
			if(err){console.log(err);}
			res.redirect('/users/:id/lists')
		});
	});
});

//======================
// DELETE
//======================
//create a DELETE "/:id" route that deletes the list item


//======================
// EXPORTS
//======================
module.exports = router;
