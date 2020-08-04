var db= require('../db');

module.exports.login= function(req,res){
    res.render('auth/login', { 
        user: db.get('user').value()
    });
};
module.exports.postLogin= function(req, res){
    var email= req.body.email;
    var password= req.body.password;
    var use = db.get('user').find({ email: email}).value();
    if(!use){
        res.render('auth/login',{
            err: [
                'User does not exists'
            ],
            value: req.body
        });
        return;
    }
    if(use.password!= password){
        res.render('auth/login',{
            err: [
                'Wrong Password'
            ], 
            value: req.body
        });
        return; 
    }
    res.cookie('userId', use.id);
    res.redirect('/user');
};