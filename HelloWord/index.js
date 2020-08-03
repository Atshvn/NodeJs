const express = require('express');
const app= express();
const port= 3000;
const userRouter= require('./Routes/users.routes');
const shortid= require('shortid');
const low= require('lowdb'); 
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json');
db= low(adapter);
db.defaults({ user: []}).write(); 
// setting pug
app.set('view engine', 'pug');
app.set('views', './views');

// using req.body
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// using forder Public de su dung img vs css
app.use(express.static('Public'));

app.get('/', function(req,res){
    res.render('user/index', {
        user: db.get('user').value()
    });
});
app.use('/user', userRouter);
app.listen(port, function(){
    console.log('Server listening on  port' + port);
});