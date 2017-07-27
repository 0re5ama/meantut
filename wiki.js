var express = require('express');

var router = express.Router();

router.get('/', function (req, res) {
	res.send('Wiki home page');
})

router.get('/about/:a', function (req, res) {
	res.send(req.params);
});

module.exports = router;
