const express = require('express');

const app = express();

const port = process.env.PORT || 2000;


const nav =  [

{link:'/books',name:'Books'},

{link:'/add',name:'Add Book'},
{link:'/review',name:'Add Review'},
{link:'/signin',name:'Signout'}];


const nav1 = [
    
    {
    link:'/signin',name:'Login'
},

{
    link:'/signup',name:'SignUp'
}];


const booksRouter = require('./src/routes/bookRoutes')(nav)
const addRouter = require('./src/routes/addRoutes')(nav);
const revRouter = require('./src/routes/reviewRoutes')(nav);
const inRouter = require('./src/routes/inRoutes')(nav1);
const indexRouter = require('./src/routes/indexRoutes')(nav1);
const supRouter = require("./src/routes/supRoutes")(nav1);

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/add',addRouter);
app.use('/review',revRouter);
app.use('/signin',inRouter);
app.use('/index',indexRouter);
app.use('/signup',supRouter);

app.get('/',function(req,res){
    res.render("index",
    {   nav1,
        
        title: 'Between-The-Covers'
        });
});



app.listen(port,()=>{console.log("Server ready at" + port)});
