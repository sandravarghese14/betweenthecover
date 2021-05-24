const express = require("express");
const adminRouter = express.Router();

const bookdata =require('../model/boookdata')
function router(nav){
   
    adminRouter.get('/',function(req,res){
        res.render("add",{
            nav,
            title:'Between-The-Covers',
        });
    });

   adminRouter.get('/books',function(req,res){
var item = {
    ibn_number: req.body.ibn_number,
    title:req.body.title,
    author:req.body.author,
    language:req.body.language,
    genre:req.body.genre,
    cover_image:req.body.cover_image,



}
var figureit= bookdata(item);
figureit.save();
res.redirect('/books');

   });



    return addRouter;
}

module.exports = router
