var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

var DonutSchema = new Schema({
	name: String,
	description: String,
	imgage: String,
	price: Number,
	qty: Number
});

var DonutModel = mongoose.model("Donut", DonutSchema);

module.exports = {
  Donut: DonutModel
};
