var express=require('express');
var router=express.Router();
var mongojs=require('mongojs');

var db =mongojs('mongodb+srv://Chiz1929:30092000@cluster0-ndbvd.mongodb.net/test?retryWrites=true&w=majority');



router.get('/todos',function(req,res,next){
    db.todos.find(function(err,todos){
        if(err){
            res.send(err);
        }else{
            res.json(todos);
     }       
    });
});

module.exports=router;