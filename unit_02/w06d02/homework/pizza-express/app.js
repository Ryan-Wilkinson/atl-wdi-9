var express = require('express'); 
var hbs = require('hbs'); 
var app = express(); 
var port = 3000;

app.set("view engine", "hbs");
app.set('views', './views');

app.get('/', function(req, res) {
  res.send('<h1>Welcome To Pizza Express!!</h1>');
});

app.get('/topping/:type', function(req, res, next) {
    res.send(`${req.params.type} Pizza, Good choice!`);
});

app.get('/order/:amount/:size', function(req, res, next) {
   res.send(`Your order for ${req.params.amount} ${req.params.size} pizzas will be ready in one minute!`);
});



app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});