var Categories = require('./categoryModel.js');

var repsonseHandler = require('../config/helpers.js').repsonseHandler;

module.exports = {
	//get all categories
	getAll: function(req, res, next) {
		Categories.find({})
		.exec(function(error, categories) {
			repsonseHandler(error, req, res, {status: 200, returnObj: categories}, next);
		});
	},

	// function to get category info by id
	getOne: function (req, res, next) {
		var id = req.params.id.toString();
		Categories.findOne({_id: id})
		.exec(function(err, category) {
			repsonseHandler(err, req, res, {status: 200, returnObj: category}, next);
		});
	},

	//add new category
	addCategory: function(req, res, next) {
		var newCategory = new Categories({
			name: req.body.name,
			poster: req.body.poster  
		});
		newCategory.save(function(err, newCategory) {
			repsonseHandler(err, req, res, {status: 201, returnObj: newCategory}, next);
		});
	}
};