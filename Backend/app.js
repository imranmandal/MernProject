const express =require("express");
const app=express();
const bodyParser=require("body-parser");

const mongoose=require("mongoose");
var cors = require('cors');
app.use(cors());
// app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json());

var uri="mongodb+srv://dbUttam:uttam123@firstuttamcluster.qpkqc.mongodb.net/ReactTest?retryWrites=true&w=majority"
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useCreateIndex', true);

const userMo=require("./model.js");

app.get("/",function(req,res){
    userMo.find(function(err,data){
        if(!err)
        {
          res.json(data)

        }
    })
})

app.post("/user",function(req,res){
    
    var user1 = req.body.user;
    var email1= req.body.email;
    var newUser=new userMo({
        user:user1,
        email:email1
    });
    newUser.save(function(err,data){
        if(!err)
        {
            res.json(data);
            
        }
        else
        {
          res.json(err);
        }
    })

});

app.delete("/user/:id",function(req,res){
    var _ID=req.params.id;
    userMo.deleteOne({_id:_ID},function(err,data){
        if(!err)
        {
           res.json(data);
        }
        else
        {
           res.json(err);
        }
    })

})
app.get("/user/:id",function(req,res){
    var _ID=req.params.id;
    userMo.findOne({_id:_ID},function(err,data){
        if(!err)
        {
            res.json(data);
        }
        else
        {  
           
               res.json(data);
           
        }
    })
})
app.get("/user",function(req,res){
    var email=req.body.email;
    userMo.findOne({email:email},function(err,data){
        if(!err)
        {
            res.json(data);
        }
        else
        {  
           
               res.json(data);
           
        }
    })
})
app.put("/user/:id",function(req,res){
    var _ID=req.params.id;
    var user1=req.body.user;
    var email1=req.body.email;
    userMo.updateOne({_id:_ID},{
        user:user1,
        email:email1
    },function(err,data){
        if(!err)
        {
            res.json(data);
        }
        else
        {
            res.json(err);
        }
    }
    )  
})
 
app.listen(5000,function(){
    console.log("server started on port 5000");
});