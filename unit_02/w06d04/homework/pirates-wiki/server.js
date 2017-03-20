/* packages */
var path        = require('path');
var logger      = require('morgan');
var express     = require('express');
var hbs         = require('hbs');
var app         = express();
var bodyParser = require('body-parser');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
  extended: true
}));




// controllers
var piratesController = require(__dirname + '/controllers/pirates_controller.js');
app.use('/pirates', piratesController);

// home
app.get('/', function(req,res) {
  res.send('This is our Home Page!');
});

var port = 3000;
app.listen(port);