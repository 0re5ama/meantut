var Genre = require('../models/genre');
var async = require('async');
var Book = require('../models/book');

//index
exports.genre_list = function (req, res) {
	Genre.find()
	.exec(function (err, list_genres) {
		if (err) {
			return next(err);
		}
		res.render('genre_list', {title: 'Genre List', genre_list: list_genres});
	});
};

//show
exports.genre_detail = function (req, res) {
	async.parallel({
		genre: function (callback) {
			Genre.findById(req.params.id)
			.exec(callback);
		},

		genre_books: function (callback) {
			Book.find({ 'genre': req.params.id })
			.exec(callback);
		},
	}, function (err, results) {
		if (err) {
			return next(err);
		}
		res.render('genre_detail', {title: 'Genre Detail', genre: results.genre, genre_books: results.genre_books } );
	});
};

//create
exports.genre_create_get = function (req, res) {
	res.send('NOT IMPLEMENTED: genre create GET');
};

exports.genre_create_post = function (req, res) {
	res.send('NOT IMPLEMENTED: genre create POST');
};

//del
exports.genre_delete_get = function (req, res) {
	res.send('NOT IMPLEMENTED: genre delete GET');
};

//destroy
exports.genre_delete_post = function (req, res) {
	res.send('NOT IMPLEMENTED: genre delete POST');
};

//edit
exports.genre_update_get = function (req, res) {
	res.send('NOT IMPLEMENTED: genre update GET');
};

//update
exports.genre_update_post = function (req, res) {
	res.send('NOT IMPLEMENTED: genre update POST');
};

