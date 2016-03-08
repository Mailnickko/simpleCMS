var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');

module.exports = (function() {
	return {
		show: function(req, res) {
			Order.find({}, function(err, results) {
				if(err) {
					res.json(err);
				} else {
					res.json(results);
				}
			})
		},
		show_recent: function(req, res) {
			var query = Order.find({}).sort({
				created_at: -1
			}).limit(3);

			query.exec(function(err, results) {
				if(err) {
					res.json(err);
				} else {
					res.json(results);
				}
			})
		},

		add: function(req, res) {
			console.log('Adding Order', req.body.name)
			var newOrder = new Order({
				name: req.body.name, 
				product: req.body.product, 
				qty: req.body.qty, 
				created_at: req.body.created_at 
			});

			newOrder.save(function(err) {
				if(err) {
					res.json(err);
				} else {
					Product.findOne({
						_id: req.body.product_id,
					}, function(err, product) {
						var newQty = product.qty - req.body.qty;
						Product.findOneAndUpdate({_id: req.body.product_id}, { qty: newQty }, function(err) {
								if(err) {
									console.log("Failed to reduce quantity");
								} else {
									console.log("Successfully reduced quantity");
								};
							});
						});
						module.exports.show(req, res);
				}
			})
		}
	}
})();