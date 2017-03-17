var express = require('express');
var hbs = require('hbs');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
  extended: true
}));

// controllers
var toDontsController = require('./controllers/toDonts_controller.js');
app.use('/toDonts', toDontsController);










var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot todonts on port', port,"//", new Date());
});