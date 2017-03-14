var express = require('express'); // Loading the express module on our server
var app = express(); // Create a new instance of express on our server
var hbs = require('hbs'); // loads handlebars

app.set("view engine", "hbs"); //tells Express what to use for rendering templates
app.use(express.static(__dirname + '/public')); // VERY IMPORTANT!! Make sure to add a '/'

app.get('/', function(req, res) { // when a request comes in at localhost:3000/ it will respond
  res.send('<h1>Default Page!</h1>');
});

app.get('/shows', function(req, res) {
    var favoriteShows = ['Vikings', ' Rick and Morty', ' GoT', ' Prison Break', ' Hannibal', ' Community', ' The League', ' Man in the High Castle', ' Brooklyn 99'];

    res.render('shows', {
        data: favoriteShows
    });
});

var port = process.env.PORT || 3000; // tells the server where to listen for requests
app.listen(port, function() {
// tells the server where to listen for requests on port 3000

  console.log('hello-express is listening on port 3000');
}); // actualizing the line above