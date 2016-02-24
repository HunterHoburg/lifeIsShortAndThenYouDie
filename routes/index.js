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

router.post('/insert', function(req, res, next) {
  var newStory = {};
  newStory.title = req.body.title;
  newStory.url = req.body.url;
  console.log(newStory);
  // knex.insert(newStory).table('stories');
  // var toLog = knex.select('*').from('stories');
  // console.log(toLog);
})

module.exports = router;
