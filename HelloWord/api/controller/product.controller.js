// var db = require('../db');
var Product = require('../../models/product.model'); 

module.exports.index = async function(req, res){
    // var page = parseInt(req.query.page) || 1;
    // var perPage = 12;
    // var start = (page - 1) * perPage; 
    // var end = page * perPage;
    // res.render('products/index',{
    //     products : db.get('products').value().slice(start,end)
    // });

    var products = await Product.find();
        res.json(products);
};