var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = (function() {
	return {
		show: function(req, res) {
			Product.find({}, function(err, results) {
				if(err) {
					res.json(err);
				} else {
					res.json(results);
				}
			})
		},

		add: function(req, res) {
			var newProduct = new Product({
				name: req.body.name,
				img: req.body.img,
				desc: req.body.desc, 
				qty: req.body.qty,
				created_at: req.body.created_at
			});
			newProduct.save(function(err) {
				if(err) {
					res.json(err);
				} else {
					module.exports.show(req, res);
				}
			})
		},

		show_recent: function(req, res) {
			var query = Product.find({}).sort({
				created_at: -1
			}).limit(5);

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