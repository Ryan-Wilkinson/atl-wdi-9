CriminalsNewController.$inject = ['$state', 'CriminalsService'];

function CriminalsNewController($state, CriminalsService) {
	const vm = this;

<<<<<<< HEAD
	vm.addCriminal = addCriminal;
=======
	vm.createCriminal = createCriminal;
>>>>>>> 721f3ea1a286054d7db5e49212ca1ff1b776f927
	vm.newCriminal = {};

	activate();

	function activate() {}

<<<<<<< HEAD
	function addCriminal() {
		CriminalsService
			.addCriminal(vm.newCriminal)
			.then(function resolve(){
				vm.newCriminal = {};
				$state.go('criminals');
			});
		}
}

module.exports = CriminalsNewController;
=======
	function createCriminal() {
		CriminalsService
			.create(vm.newCriminal)
			.then(function resolve(response) {
				const id = response.data.criminal._id;
				$state.go('criminalsShow', { criminalId: id });
			});
	}
}

module.exports = CriminalsNewController;
>>>>>>> 721f3ea1a286054d7db5e49212ca1ff1b776f927
