var Author = require('../models/author');
var async = require('async');
var Book = require('../models/book');

//index
exports.author_list = function (req, res) {
	Author.find()
	.sort([['family_name', 'ascending']])
	.exec(function (err, list_authors) {
		if (err) {
			return next(err);
		}
		res.render('author_list', {title: 'Author list', author_list: list_authors});
	});
};

//show
exports.author_detail = function (req, res) {
	async.parallel({
		author: function (callback) {
			Author.findById(req.params.id)
			.exec(callback);
		},
		author_books: function (callback) {
			Book.find({ 'author': req.params.id }, 'title summary')
			.exec(callback);
		},
	}, function (err, results) {
		if (err) {
			return next(err);
		}
		res.render('author_detail', {title: 'Author Detail', author: results.author, author_books: results.author_books });
	});
};

//create
exports.author_create_get = function (req, res) {
	res.send('NOT IMPLEMENTED: Author create GET');
};

exports.author_create_post = function (req, res) {
	res.send('NOT IMPLEMENTED: Author create POST');
};

//del
exports.author_delete_get = function (req, res) {
	res.send('NOT IMPLEMENTED: Author delete GET');
};

//destroy
exports.author_delete_post = function (req, res) {
	res.send('NOT IMPLEMENTED: Author delete POST');
};

//edit
exports.author_update_get = function (req, res) {
	res.send('NOT IMPLEMENTED: Author update GET');
};

//update
exports.author_update_post = function (req, res) {
	res.send('NOT IMPLEMENTED: Author update POST');
};

