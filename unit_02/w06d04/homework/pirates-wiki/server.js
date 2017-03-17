var express = require('express');
var app = express();

var hbs = require('hbs');
app.set('view engine', 'hbs');

// controllers
var piratesController = require(__dirname + '/controllers/pirates_controller.js');
app.use('/pirates', piratesController);







var port = 3000;
app.listen(port);