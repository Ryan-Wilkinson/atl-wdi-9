angular.module('ThePresidentsApp')
	.controller('PresidentsController', PresidentsController);

PresidentsController.$inject = ['$http'];

function PresidentsController($http){
	var vm = this;

	vm.removePresident = removePresident;
	vm.addPresident = addPresident;
	vm.all = [];
	vm.newPresident = {};

	activate();

	function activate() {
		loadAllPresidents();
	}

	 function addPresident(){
		$http
			.post('/presidents', vm.newPresident)
			.then(function someName(response) {
				vm.all.push(response.data.president);
				vm.newPresident = {};
			});
	 }

	 function removePresident(president, index){
	 	$http
	 		.delete('/presidents/' + president._id)
	 		.then(function resolve(response) {
	 			vm.all.splice(index, 1);    // shorter way to just splice out the specific one 
	 		// 	vm.all = vm.all.filter(function(currentlyIteratedPresident) {
	 		// 		return president._id !== currentlyIteratedPresident._id
	 		// 	})
	 	});
	 }

	 function loadAllPresidents() {
		 $http
			.get('/presidents')
			.then(function handleSuccess(response) {
				vm.all = response.data.presidents;
			}, function handleError(err) {
			});
		}

	}

