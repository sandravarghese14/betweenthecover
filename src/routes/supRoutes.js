const express = require("express");
const supRouter = express.Router();
function router(nav1){
   
    supRouter.get('/',function(req,res){
        res.render("signup",{
            nav1,
            title:'Between-The-Covers',
        });
    });
    

    return supRouter;
}

module.exports = router;