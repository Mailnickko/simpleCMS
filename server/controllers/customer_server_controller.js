var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function() {
	return {
		show: function(req, res) {
			Customer.find({}, function(err, results) {
				if (err) {
					console.log(err);
					res.json(err);
				} else {
					res.json(results);
				}
			})
		},
		add: function(req, res) {
			var newCustomer = new Customer({
				name: req.body.name,
				created_at: req.body.created_at
			});
			newCustomer.save(function(err) {
				if(err) {
					res.json(err);
				} else {
					console.log("New Customer Added");
					module.exports.show(req, res);
				}
			})
		},
		destroy: function(req, res) {
			Customer.remove({
				_id: req.params.id
			}, function(err) {
				if(err) {
					res.json(err);
				} else {
					module.exports.show(req, res);
				}
			})
		},
		show_recent: function(req, res) {
			var query = Customer.find({}).sort({
				created_at: -1
			}).limit(3);

			query.exec(function(err, results) {
				if(err) {
					res.json(err);
				} else {
					res.json(results)
				}
			})
		}

	}

})();