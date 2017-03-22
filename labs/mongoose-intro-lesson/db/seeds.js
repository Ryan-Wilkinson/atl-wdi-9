var mongoose = require('mongoose');
var Schema = require('./schema.js');

var StudentModel = Schema.StudentModel;
var ProjectModel = Schema.ProjectModel;

StudentModel.remove({}, function(err) {
	console.log(err);
});

ProjectModel.remove({}, function(err) {
	console.log(err);
});

var becky = new StudentModel({name: 'Becky'});
var brandon = new StudentModel({name: 'Brandon'});
var steve = new StudentModel({name: 'Steve'});

var project1 = new ProjectModel({title: 'Project 1', unit: 'js'});
var project2 = new ProjectModel({title: 'Project 2', unit: 'express'});
var project3 = new ProjectModel({title: 'Project 3', unit: 'angular'});
var project4 = new ProjectModel({title: 'Project 4', unit: 'rails'});

var students = [becky, brandon, steve];
var projects = [project1, project2, project3, project4];

students.forEach(function(student, i) {
	student.projects.push(projects[i], projects[i + 1]);

	student.save(function(err) {
		if (err) {console.log(err)
		}
			console.log(student);
	});
});