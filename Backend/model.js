const mongoose=require("mongoose");

var userSchema=new mongoose.Schema({
    user:
    {
        type:String,
        required:[true,"please enter user name"],
        unique:true
    },
    email:
    {
        type:String,
        required:[true,"please enter email"],
        unique:true
    }
})

var userMo=mongoose.model("userMo",userSchema);
module.exports=userMo;