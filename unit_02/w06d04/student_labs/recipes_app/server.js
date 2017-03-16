var express = require('express'); 
var hbs = require('hbs'); 
var app = express(); 

app.set("view engine", "hbs"); 
app.use(express.static(__dirname + '/public')); 

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));

var recipesController = require('./controllers/recipes_controller.js');
app.use('/recipes', recipesController);

app.listen(3000);