var express = require('express'); 
var hbs = require('hbs'); 
var app = express(); 
var port = 3000;

app.set("view engine", "hbs"); 
app.use(express.static(__dirname + '/public')); 






app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});