pry = require('pryjs')
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var logger = require('morgan');
var hbs = require('hbs');
var mongoose = require('mongoose');
var authHelpers = require('./helpers/auth.js')


var listsController = require('./controllers/listsController.js');
var usersController = require('./controllers/usersController.js');
var sessionsController = require('./controllers/sessionsController.js');

// require the list controller here

var app = express();

mongoose.connect('mongodb://localhost/auth');
var db = mongoose.connection;

app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(logger('dev'));
app.use(methodOverride('_method'));

app.use(session({
  secret: "derpderpderpcats",
  resave: false,
  saveUninitialized: false
}));

app.use('/users', usersController);
app.use('/sessions', sessionsController);
app.use('/users/:userId/lists', listsController);

//add the third app.use here (check readme for which route)


app.listen(4000, function() {
  console.log('hey');
});
