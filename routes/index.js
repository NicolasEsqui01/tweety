const express = require('express');
const router = express.Router();

// Se puede usar solo una linea: const router = require('express').Router();
const tweetBank = require('../tweetBank');

//mostrar todos los tweets 
router.get('/', function (req, res,next) {
  let tweets = tweetBank.list();
  res.render( 'index', {tweets: tweets , showForm: true});
});

//mostrar los tweets de los usuarios por el name
router.get('/users/:name',function(req,res,next){
  let name = req.params.name;
  let listTweets = tweetBank.find({name:name});
  res.render('index', {list:listTweets , showForm: true})
});

//mostrar los tweets por el id 
router.get('/tweets/:id',function (req,res,next){
  let idTweets = req.params.id
  let numberDeid = Number(idTweets)
  let listTweets = tweetBank.find({id:numberDeid})
  res.render('index',{tweets1:listTweets})
});

//ruta para traer lo que escribo en el formulario 
router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add( name,text);
  res.redirect('/');
});

module.exports = router;