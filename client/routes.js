var app = angular.module('myStore', ['ngRoute']);
app.config(function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: './../static/partials/dashboard.partial.html',
			controller: "DashboardCtrl"
		})
		.when('/customers', {
			templateUrl: './../static/partials/customer.partial.html',
			controller: "CustomerCtrl"
		})
		.when('/orders', {
			templateUrl: './../static/partials/order.partial.html',
			controller: "OrderCtrl"
		})
		.when('/products', {
			templateUrl: './../static/partials/product.partial.html',
			controller: "ProductCtrl"
		})
		.otherwise({
			redirectTo: '/'
		});
})