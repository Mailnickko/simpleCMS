app.factory('orderFactory', function($http) {
	var orders = [];
	var factory = {};

	factory.getOrders = function(callback){
		$http.get('/orders').success(function(output){
			callback(output);
		});
	};
	factory.recent_show = function(callback){
		$http.get('/recent_orders').success(function(output){
			callback(output);
		});
	};
	factory.addOrder = function(newOrder, callback){
		$http.post('/addOrder', newOrder).success(function(output){
			callback(output);
		});
	}

	return factory;
});