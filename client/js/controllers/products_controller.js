app.controller('ProductCtrl', function(productFactory, $scope) {

	$scope.products = [];
	$scope.dup_msg = "";

	getProducts();

	function getProducts() {
		productFactory.getProducts(function(data) {
			$scope.products = data;
		})
	};

	$scope.addProduct = function(newProduct) {
		$scope.notValid = false;
		if($scope.isDuplicate()) {
			$scope.dup_msg = "That product already exists";
		} 
		else if ($scope.newProduct == "" || $scope.newProduct == null ) {
			$scope.notValid = true;
		} else {
			$scope.newProduct.created_at = new Date();
			productFactory.addProduct(newProduct, function(data) {
				$scope.products = data;
				$scope.newProduct = "";
			})
		}
	}

	$scope.isDuplicate = function() {
		for (var i = 0; i < $scope.products.length; i++) {
			if ($scope.newProduct !== undefined) {
				if ($scope.newProduct.name == $scope.products[i].name) {
					$scope.dup_msg = "NThat product already exists!";
					return true;
				}
			}
		}
		return false;
	}
});