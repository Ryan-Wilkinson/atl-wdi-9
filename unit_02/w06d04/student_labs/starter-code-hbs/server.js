/* packages */
var path        = require('path');
var logger      = require('morgan');
var express     = require('express');
var hbs         = require('hbs');
var app         = express();
var port        = process.env.PORT || 3000;
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(methodOverride('_method'));


// controllers
var todosController = require('./controllers/todos.js');
app.use('/todos', todosController);

// log
app.use( logger('dev'));

/*Views*/
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

/* HOME */
app.get('/', function(req,res) {
  res.send('This is our Home Page');
});

// Start server
app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
});
