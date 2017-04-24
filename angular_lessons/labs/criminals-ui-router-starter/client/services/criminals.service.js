angular
	.module('criminals')
	.service('CriminalsService', CriminalsService);

CriminalsService.$inject = ['$http'];

function CriminalsService($http) {
	const self = this;

	// WHAT THIS SERVICE DOES / HAS AVAILABLE TO CALL
	self.create = create;
	self.loadAll = loadAll;
	self.loadCurrent = loadCurrent;
<<<<<<< HEAD
	self.addCriminal = addCriminal;
	self.newCriminal = {};
	self.updateCriminal = updateCriminal;
	self.deleteCriminal = deleteCriminal;
=======
>>>>>>> 721f3ea1a286054d7db5e49212ca1ff1b776f927


	// HOW IT DOES STUFF
	function create(criminalData) {
		return $http
			.post('/api/criminals', criminalData);
	}

	function loadAll() {
		return $http.get('/api/criminals');
	}

	function loadCurrent(id) {
		return $http.get('/api/criminals/' + id);
	}
<<<<<<< HEAD

	function addCriminal(newCriminal) {
		return $http.post('/api/criminals', newCriminal);
	}

	function updateCriminal(criminal) {
		return $http.patch('/api/criminals/' + criminal._id, criminal);
	}

	function deleteCriminal(id) {
		return $http.delete('/api/criminals/' + id);
	}
=======
>>>>>>> 721f3ea1a286054d7db5e49212ca1ff1b776f927
}
