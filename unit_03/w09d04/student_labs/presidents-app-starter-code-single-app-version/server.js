// Define Variables and import stuff
var express = require('express');
var path = require('path');
var cors = require('cors');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();

// Connect to DB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/presidents-app');

// Set up engine stuff and middleware
// Defining what views to use and what templating engine if we want it
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Load in routes
var presidentsController = require("./controllers/presidents.js");
app.use('/presidents', presidentsController);

// Start the server
app.listen(3000);
