var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Menu.findAll().then(function(menu) {
  res.render('index', { 
    title: 'RVRB',
    menu: menu
    
   });
  });
});

// /* POST new item. */
router.post('/additem', function(req, res) {
  models.Menu.create({ 
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    appetizer: req.body.appetizer,
    wing: req.body.wing,
    salad: req.body.salad,
    oyster: req.body.oyster,
    sandwich: req.body.sandwich,
    platter: req.body.platter,
    taco: req.body.taco,
    entree: req.body.entree,
    side: req.body.side,
    beverage: req.body.beverage,
    kids: req.body.kids
   }).then(function() {
    res.redirect('/');
  });
});

/* GET home page. */
router.get('/additem', function(req, res, next) {
  res.render('additem', { title: 'Express' });
});

module.exports = router;
