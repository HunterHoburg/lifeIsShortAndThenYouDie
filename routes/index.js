var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Life is Short, and Then You Die' });
});

router.post('create', function(req, res, next) {
  var newGame = {};
  knex.insert(newGame).table('games')
})

module.exports = router;
