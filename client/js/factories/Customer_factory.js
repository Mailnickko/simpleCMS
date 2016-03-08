app.factory('customerFactory', function($http) {
	var customers = [];
	var factory = {};

	factory.getCustomers = function(callback) {
		$http.get('/customers').success(function(output) {
			callback(output);
		});
	};

	factory.recent_show = function(callback) {
		$http.get('/recent_customers').success(function(output) {
			callback(output);
		})
	};

	factory.addCustomer = function(newCustomer, callback) {
			console.log("infactory");
		$http.post('/addCustomer', newCustomer).success(function(output) {
			callback(output);
		});
	};

	factory.destroyCustomer = function(customer, callback) {
		$http.delete('/customers/' + customer._id).success(function(response) {
			callback(response);
		})
	};

	return factory;
});