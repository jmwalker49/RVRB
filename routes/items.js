var express = require('express');
var router = express.Router();
var models = require('../models');

// /* POST new burger. */
// router.post('/', function(req, res) {
//   models.Item.create({ 
//     name: req.body.name,
//     description: req.body.description,
//     price: req.body.price
//    }).then(function() {
//     res.redirect('/');
//   });
// });

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('additem', { title: 'Express' });
// });

module.exports = router;