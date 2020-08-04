var db = require('../db');
module.exports.requireAuth= function(req,res,next){
    if(!req.signedCookies.userId){
        res.redirect('/auth/login');
        return;
    }
    var use = db.get('user').find({id :req.signedCookies.userId }).value();
    if(!use){
        res.redirect('/auth/login');
        return;
    }
    // Lay ten use da dang nhap
    res.locals.use = use;
    next();
}