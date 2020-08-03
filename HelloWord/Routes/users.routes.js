var express= require('express');
const shortid= require('shortid');
var router= express.Router();
var controller= require('../Controller/user.controller');
var db= require('../db');
router.get('/', controller.index);
// tim kiem user
router.get('/search', controller.search);

// Tao user moi
router.get('/create', controller.create);

router.get('/:id', controller.get);
router.post('/create', controller.postCreate);
module.exports= router;

