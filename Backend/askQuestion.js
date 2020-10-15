const express =require("express");
const app=express();
const bodyParser=require("body-parser");

const mongoose=require("mongoose");
const questionModel=require("./askquestionModel");
var cors = require('cors');
app.use(cors());
app.use(express.json());
var uri="mongodb+srv://dbUttam:uttam123@firstuttamcluster.qpkqc.mongodb.net/ReactTest?retryWrites=true&w=majority"
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useCreateIndex', true);
app.get('/',function(req,res){
    res.json({name:"hii"});
})
app.get("/all-question",function(req,res){
    questionModel.find(function(err,data){
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

app.post("/add-question",function(req,res){
    var title=req.body.title;
    var question=req.body.question;
    var newAskQuestion=new questionModel({
        title:title,
        question:question

    })
    newAskQuestion.save(function(err,data){
        if(!err)
        {
            res.json(data);
        }
        else{
            res.json(err);
        }
    })

});

app.get("/question/:id",function(req,res){
    var ID=req.params.id;
    questionModel.findOne({_id:ID},function(err,data){
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
app.listen(5000,function(){
    console.log("server started on port 5000");
});
