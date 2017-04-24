const angular = require('angular');
require('angular-ui-router');

angular
	.module('criminals', ['ui.router'])
<<<<<<< HEAD
	.config(uiRouterSetup)
=======
	.config(uiRouterSetup);
>>>>>>> 721f3ea1a286054d7db5e49212ca1ff1b776f927

uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
function uiRouterSetup($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			template: '<home></home>'
		})
		.state('about', {
			url: '/about',
<<<<<<< HEAD
			template: '<about></about>'
=======
			// template: '<about></about>' // LAB Goal #1 -- get this line to work
			template: '<h1>About</h1><a ui-sref="home">Home</a>'
>>>>>>> 721f3ea1a286054d7db5e49212ca1ff1b776f927
		})
		.state('criminals', {
			url: '/criminals',
			template: '<criminals></criminals>'
		})
		.state('criminalsNew', {
			url: '/criminals/new',
			template: '<criminals-new></criminals-new>'
		})
<<<<<<< HEAD
		.state('criminalsEdit', {
			url: '/criminals/edit/:criminalId',
			template: '<criminals-edit></criminals-edit>'
		})
		.state('criminalsShow', {
			url: '/criminals/:criminalId',
			template: '<criminals-show></criminals-show>'
		})
=======
		.state('criminalsShow', {
			url: '/criminals/:criminalId',
			template: '<criminals-show></criminals-show>'
		});
>>>>>>> 721f3ea1a286054d7db5e49212ca1ff1b776f927

	$urlRouterProvider.otherwise('/');
}
