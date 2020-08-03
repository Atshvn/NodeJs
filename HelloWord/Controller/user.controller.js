
var db= require('../db');
const shortid= require('shortid');

module.exports.index= function(req,res){
    res.render('user/index', { 
        user: db.get('user').value()
    });
};

module.exports.search= function(req,res){
    var q=req.query.q;
    var matchedUsers= db.get('user').filter(function(use){
        return use.name.toLowerCase().indexOf(q) !== -1;
       
    });
    res.render('user/index', {
        user: matchedUsers.value()           
    });
};

module.exports.create= function(req,res){
    res.render('user/create');
};

module.exports.get= function(req,res){
    var id= req.params.id;
    var use = db.get('user').find({id : id}).value();
    console.log(use);
    res.render('user/view', {
       use: use
    });
};

module.exports.postCreate = function(req, res){
    req.body.id= shortid.generate();
    var err=[];
    if(!req.body.name){
        err.push('Name is required');

    }
    if(!req.body.phone){
        err.push('Phone is required');

    }
    if(err.length)
    {
        res.render('user/create', {
            err: err,
            value: req.body
        })
        return;
    }
    db.get('user').push(req.body).write();
    res.redirect('/user');
};