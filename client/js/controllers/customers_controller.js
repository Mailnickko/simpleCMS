app.controller('CustomerCtrl', function(customerFactory, $scope) {
	$scope.customers = [];
	$scope.dup_msg = "";

	getCustomers();

	function getCustomers() {
		customerFactory.getCustomers(function(data) {
			$scope.customers = data;
		})
	};

	$scope.addCustomer = function(newCustomer) {
		$scope.notValid = false;

		if($scope.isDuplicate()) {
			console.log('in controller');
			$scope.dup_msg = "That customer already exits";
		} else if ($scope.newCustomer == null || $scope.newCustomer == "") {
			$scope.notValid = true;
		} else {
			console.log('in controller');
			$scope.newCustomer.created_at = new Date();
			customerFactory.addCustomer(newCustomer, function(data) {
				$scope.customers = data;
				$scope.newCustomer = "";
			});
		}
	}

	$scope.isDuplicate = function() {
		for(var i = 0; i < $scope.customers.length; i++) {
			if ($scope.newCustomer !== undefined) {
				if ($scope.newCustomer.name == $scope.customers[i].name) {
					$scope.dup_msg = "Name is already is use fool!";
					return true;
				}
			}
		}
		return false;
	}

	$scope.destroyCustomer = function(customer) {
		customerFactory.destroyCustomer(customer, function() {
			getCustomers();
		})
	}
});