var express= require('express');
const shortid= require('shortid');
var router= express.Router();
module.exports= router;
var controller= require('../Controller/auth.controller');
var db= require('../db');

router.get('/login', controller.login);
router.post('/login',controller.postLogin);