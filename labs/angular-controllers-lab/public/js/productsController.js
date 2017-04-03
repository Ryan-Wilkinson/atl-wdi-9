angular
		.module('storeApp')
		.controller('ProductsController', ProductsController) 
		.controller('CategoriesController', CategoriesController);

function ProductsController() {
	this.products = [
	{ name: 'Surface Book', price: '1500.43', dateAdded: '1490929458881'},
	{ name: 'MacBook Pro 15"', price: '1800.34', dateAdded: '1490929458881'},
	{ name: 'Macbook Pro 13"', price: '1600.28', dateAdded: '1490929458881'},
	{ name: 'TI-86', price: '100.43', dateAdded: '1490929458881'},
	{ name: 'UE Roll Speaker', price: '90.78', dateAdded: '1490929458881'}
	];

	 this.newProduct = { name: '', price: '', dateAdded: ''};
// this just adds a new object to our array, with defaults for now
    var addProduct = function(){
      this.products.push({ name: this.newProduct.name, price: this.newProduct.price, dateAdded: this.newProduct.dateAdded });

      this.newProduct.name= '';
      this.newProduct.price= '';
      this.newProduct.dateAdded= '';
    };

//this will add our new function as a property on our controller, so we can use it in the view
    this.add = addProduct;
}

function CategoriesController() {
	this.productCategories = [
		'Smartphones',
		'Bluetooth Speakers',
		'Video Games'
	];
  };


