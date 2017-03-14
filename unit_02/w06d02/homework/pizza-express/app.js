var express = require('express'); 
var hbs = require('hbs'); 
var app = express(); 
var port = 3000;

app.set("view engine", "hbs");
app.set('views', './views');
app.use(express.static(__dirname + '/public')); // VERY IMPORTANT!! Make sure to add a '/'

app.get('/', function(req, res) {
	res.render
})

app.get('/topping/:type', function(req, res) {
  res.render('topping', {
    topping: req.params.type
  })
});

app.get('/order/:amount/:size', function(req, res) {
  res.render('order', {
    amount: req.params.amount,
    size: req.params.size
  })
});

app.get('/pizza', function(req, res) {
  res.status(404).send('<h1>ERROR 404 Not Found</h1>');
});

app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});