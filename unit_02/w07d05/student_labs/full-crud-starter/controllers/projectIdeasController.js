var express = require('express');
var router = express.Router({mergeParams: true});

var User = require("../models/user");
var Item = require("../models/item");
var ProjectIdea = require('../models/project_idea');

// PROJECT INDEX ROUTE
router.get('/', function indexProjectIdea(req, res){
  User.findById(req.params.userId)
    .exec(function(err, user){
      if (err) { console.log(err); }
      res.render('project_ideas/index.hbs', {
        user: user
      });
    });
});

//PROJECT NEW ROUTE
router.get('/new', function newProjectIdea(req, res){
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err) }
      res.render('project_ideas/new', {
        user: user
      });
    });
});

// PROJECT EDIT ROUTE
router.get('/:id/edit', function editProjectIdea(req, res) {
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err); }
      const projectIdea = user.project_ideas.id(req.params.id);

      res.render('project_ideas/edit', {
        projectIdea: projectIdea,
        user: user
      });
    });
});


module.exports = router;