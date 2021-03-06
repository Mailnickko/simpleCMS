var customers = require('./../controllers/customer_server_controller.js');
var products = require('./../controllers/product_server_controller.js');
var orders = require('./../controllers/order_server_controller.js');

module.exports = function(app) {
	app.get('/customers', function(req, res) {
		customers.show(req, res);
	});
	app.post('/addCustomer', function(req, res) {
		customers.add(req, res);
	});
	app.delete('/customers/:id', function(req, res) {
		customers.destroy(req, res);
	});
	app.get('/recent_customers', function(req, res) {
		customers.show_recent(req, res);
	});


	app.get('/products', function(req, res) {
		products.show(req, res);
	});
	app.get('/recent_products', function(req, res) {
		products.show_recent(req, res);
	});
	app.post('/addProduct', function(req, res) {
		products.add(req, res);
	});
	app.delete('/products/:id', function(req, res) {
		products.destroy(req, res);
	});


	app.get('/orders', function(req, res) {
		orders.show(req, res);
	});
	app.get('/recent_orders', function(req, res) {
		orders.show_recent(req, res);
	});
	app.post('/addOrder', function(req, res) {
		orders.add(req, res);
	})
}