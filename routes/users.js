var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This is users page.');
});

router.get('/cool', function(req, res, next) {
  res.render('users/cool', { title: 'Cool	' });
});

module.exports = router;
