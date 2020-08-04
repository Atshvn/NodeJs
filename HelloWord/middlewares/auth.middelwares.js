var db = require('../db');
module.exports.requireAuth= function(req,res,next){
    if(!req.cookies.userId){
        res.redirect('/auth/login');
        return;
    }
    var use = db.get('user').find({id :req.cookies.userId }).value();
    if(!use){
        res.redirect('/auth/login');
        return;
    }
    next();
}