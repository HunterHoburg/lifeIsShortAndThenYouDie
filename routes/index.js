var express = require('express');
var router = express.Router();
var knex = require('knex')({
  client: 'pg',
  connection: process.env.DB_HOST
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Life is Short, and Then You Die' });
});

router.post('create', function(req, res, next) {
  var newGame = {};
  knex.insert(newGame).table('games')
})

router.post('/insert', function(req, res, next) {
  var newStory = {
    title: req.body.title,
    url: req.body.url,
    sentiment: req.body.sentiment
  };
  // newStory.title = req.body.title;
  // newStory.url = req.body.url;
  // newStory.sentiment = req.body.sentiment;
  console.log(newStory);
  knex.insert(newStory).into('stories');
  // var toLog = knex.select('*').from('stories');
  // console.log(toLog.title);
})

module.exports = router;
