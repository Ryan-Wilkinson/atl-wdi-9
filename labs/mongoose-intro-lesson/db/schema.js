var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students');

// Use ES6 native promises. We are specifying a Promise library to avoid a depreciation warning in the console.
mongoose.Promise = global.Promise;

// Now that we are connected, let's save that connection to the database in a variable. We are just doing this to keep our code DRY.
var db = mongoose.connection;

// Will log an error if db can't connect to MongoDB
db.on('error', function(err) {
  console.log(err);
});

// Will log "database has been connected" if it successfully connects.
db.once('open', function() {
  console.log("database has been connected!");
});

// Disconnect from database
db.close();

var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  title: String,
  unit: String
});

var StudentSchema = new Schema({
  name: String,
  age: Number,
  projects: [ProjectSchema]
});

var ProjectModel = mongoose.model("Project", ProjectSchema);
var StudentModel = mongoose.model("Student", StudentSchema);

// // First we create a new student. It's just like generating a new instance of a constructor function!
// var frankie = new StudentModel({name: "Frankie P.", age: 30});
// var project1 = new ProjectModel({title: "connect four", unit: "JS"});

// frankie.projects.push(project1);

// frankie.save(function(err, student){
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log(student);
//   }
// });

module.exports = {
  StudentModel: StudentModel,
  ProjectModel: ProjectModel
};






