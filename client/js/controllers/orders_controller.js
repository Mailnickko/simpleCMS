app.controller('OrderCtrl', function(orderFactory, customerFactory, productFactory, $scope) {
	$scope.orders = [];
	$scope.products = [];
	$scope.users = [];
	$scope.newOrder = {};
	$scope.user_names = [];
	$scope.product_names = [];
	$scope.qty_error = false;

	orderFactory.getOrders(function(data) {
		$scope.orders = data;
	})

	customerFactory.getCustomers(function(data) {
		$scope.users = data;
	})

	productFactory.getProducts(function(data) {
		$scope.products = data;
	})

	$scope.addOrder = function(newOrder) {
		$scope.newOrder.created_at = new Date();
		$scope.newOrder.name = $scope.newOrder.name.name;
		$scope.qty = $scope.newOrder.product.qty;
			//keep ID to reduce product count later
		$scope.newOrder.product_id = $scope.newOrder.product._id;
		$scope.newOrder.product = $scope.newOrder.product.name;

		if($scope.qty < $scope.newOrder.qty){
			$scope.qty_error = true;
			$scope.qty_msg = 'The product has only '+$scope.qty + ' left!';
		}else{
			orderFactory.addOrder($scope.newOrder, function(data){
				$scope.orders = data;
				$scope.newOrder = {};
				$scope.qty_error = false;
			});
		}
	}



});