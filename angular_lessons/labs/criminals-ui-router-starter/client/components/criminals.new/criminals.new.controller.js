CriminalsNewController.$inject = ['$state', 'CriminalsService'];

function CriminalsNewController($state, CriminalsService) {
	const vm = this;

	vm.addCriminal = addCriminal;
	vm.newCriminal = {};

	activate();

	function activate() {}

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