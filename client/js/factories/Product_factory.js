app.factory('productFactory', function($http) {
	var products = [];
	var factory = {};

	factory.getProducts = function(callback) {
		$http.get('/products').success(function(output) {
			callback(output);
		});
	};

	factory.recent_show = function(callback){
		$http.get('/recent_products').success(function(output){
			callback(output);
		});
	};

	factory.addProduct = function(new_product, callback){
		$http.post('/addProduct', new_product).success(function(output){
			
			callback(output);
		});
	};

	

	return factory;
});