var express= require('express');
var router= express.Router();
module.exports= router;

var controller= require('../Controller/product.controller');
router.get('/', controller.index);