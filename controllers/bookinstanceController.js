var BookInstance = require('../models/bookinstance');

//index
exports.bookinstance_list = function (req, res) {
	BookInstance.find()
	.populate('book')
	.exec(function (err, list_bookinstances) {
		if (err) {
			return next(err);
		}

		res.render('bookinstance_list', {title: 'Book Instance List', bookinstance_list: list_bookinstances});
	});
};

//show
exports.bookinstance_detail = function (req, res) {
	BookInstance.findById(req.params.id)
	.populate('book')
	.exec(function (err, bookinstance) {
		if (err) {
			return next(err);
		}
		res.render('bookinstance_detail', {title: 'Book:', bookinstance: bookinstance });
	});
};

//create
exports.bookinstance_create_get = function (req, res) {
	res.send('NOT IMPLEMENTED: bookinstance create GET');
};

exports.bookinstance_create_post = function (req, res) {
	res.send('NOT IMPLEMENTED: bookinstance create POST');
};

//del
exports.bookinstance_delete_get = function (req, res) {
	res.send('NOT IMPLEMENTED: bookinstance delete GET');
};

//destroy
exports.bookinstance_delete_post = function (req, res) {
	res.send('NOT IMPLEMENTED: bookinstance delete POST');
};

//edit
exports.bookinstance_update_get = function (req, res) {
	res.send('NOT IMPLEMENTED: bookinstance update GET');
};

//update
exports.bookinstance_update_post = function (req, res) {
	res.send('NOT IMPLEMENTED: bookinstance update POST');
};

