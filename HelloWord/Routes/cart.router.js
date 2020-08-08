var express= require('express');
var router= express.Router();
module.exports= router;
var controller= require('../Controller/cart.controller');

var db= require('../db');
router.get('/add/productId', controller.addToCart);