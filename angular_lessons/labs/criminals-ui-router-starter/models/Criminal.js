var mongoose = require('mongoose');

var CriminalSchema = mongoose.Schema({
	name: String,
<<<<<<< HEAD
  	crime: String
=======
  crime: String,

>>>>>>> 721f3ea1a286054d7db5e49212ca1ff1b776f927
});

module.exports = mongoose.model('Criminal', CriminalSchema);
