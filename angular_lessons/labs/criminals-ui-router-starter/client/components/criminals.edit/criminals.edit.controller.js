CriminalsEditController.$inject = ['$state', '$stateParams', 'CriminalsService'];

function CriminalsEditController($state, $stateParams, CriminalsService) {
	const vm = this;

	vm.current = {}

	activate();

	function activate(){
		CriminalsService
			.loadCurrent($stateParams.criminalId)
			.then(function resolve(response){
				vm.current = response.data.criminal;
			});
	}

	vm.updateCriminal = updateCriminal;

	function updateCriminal(criminal) {
		console.log(criminal);
		CriminalsService
			.updateCriminal(criminal);
			$state.go('criminals');
	}
}

module.exports = CriminalsEditController;