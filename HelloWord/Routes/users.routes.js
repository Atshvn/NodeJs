var express= require('express');
const shortid= require('shortid');
var router= express.Router();
module.exports= router;
var controller= require('../Controller/user.controller');
var authMiddelware= require('../middlewares/auth.middelwares');


var db= require('../db');
router.get('/',authMiddelware.requireAuth, controller.index);
router.get('/cookie', function(req,res,next){
    res.cookie('user-id', 12345);
    res.send('hello');
});
// tim kiem user
router.get('/search', controller.search);

// Tao user moi
router.get('/create', controller.create);

router.get('/:id', controller.get);
router.post('/create', controller.postCreate);


