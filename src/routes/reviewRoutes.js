const express = require("express");
const revRouter = express.Router();

function router(nav){
   
    revRouter.get('/',function(req,res){
        res.render("review",{
            nav,
            title:'Between-The-Covers',
        });
    });
    

    return revRouter;
}

module.exports = router;