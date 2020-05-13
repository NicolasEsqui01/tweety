const express = require('express');
const router = express.Router();

// Se puede usar solo una linea: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res,next) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name',function(req,res,next){
  let name = req.params.name;
  let listTweets = tweetBank.find({name:name});
  res.render('index', {list:listTweets})
});

module.exports = router;