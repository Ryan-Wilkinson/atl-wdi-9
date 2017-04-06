angular
	.module('criminals')
	.service('CriminalsService', CriminalsService);

CriminalsService.$inject = ['$http'];

function CriminalsService($http) {
	const self = this;

	// WHAT THIS SERVICE DOES / HAS AVAILABLE TO CALL
	self.loadAll = loadAll;
	self.loadCurrent = loadCurrent;
	self.addCriminal = addCriminal;
	self.newCriminal = {};
	self.updateCriminal = updateCriminal;
	self.deleteCriminal = deleteCriminal;


	// HOW IT DOES STUFF
	function loadAll() {
		return $http.get('/api/criminals');
	}

	function loadCurrent(id) {
		return $http.get('/api/criminals/' + id);
	}

	function addCriminal(newCriminal) {
		return $http.post('/api/criminals', newCriminal);
	}

	function updateCriminal(criminal) {
		return $http.patch('/api/criminals/' + criminal._id, criminal);
	}

	function deleteCriminal(id) {
		return $http.delete('/api/criminals/' + id);
	}
}
