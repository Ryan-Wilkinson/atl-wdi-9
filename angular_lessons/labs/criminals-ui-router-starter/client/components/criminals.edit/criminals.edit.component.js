const controller = require('./criminals.edit.controller.js');
const template = require('./criminals.edit.html');

const component = {
	controller: controller,
	template: template
}

angular
	.module('criminals')
	.component('criminalsEdit', component);