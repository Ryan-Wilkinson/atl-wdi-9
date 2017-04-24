CriminalsShowController.$inject = ['$stateParams', 'CriminalsService'];

function CriminalsShowController($stateParams, CriminalsService) {
	const vm = this;

	vm.current = {};

	activate();

	function activate() {
		loadCurrentCriminal();
<<<<<<< HEAD
	};

	function loadCurrentCriminal() {
		CriminalsService
			.loadCurrent($stateParams.criminalId)
			.then(function resolve(response){
=======
	}

	function loadCurrentCriminal() {
		console.log($stateParams);

		CriminalsService
			.loadCurrent($stateParams.criminalId)
			.then(function resolve(response) {
>>>>>>> 721f3ea1a286054d7db5e49212ca1ff1b776f927
				vm.current = response.data.criminal;
			});
	}
}

<<<<<<< HEAD
module.exports = CriminalsShowController;
=======
module.exports = CriminalsShowController;
>>>>>>> 721f3ea1a286054d7db5e49212ca1ff1b776f927
