const express = require("express");
const addRouter = express.Router();
function router(nav){
   
    addRouter.get('/',function(req,res){
        res.render("add",{
            nav,
            title:'Between-The-Covers',
        });
    });
   



    return addRouter;
}

module.exports = router
