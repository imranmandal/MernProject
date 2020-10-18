const mongoose = require("mongoose");




const questionSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "please enter title"],

    },
    question: {
        type: String,
        required: [true, "why didn't given question field "]
    },
    answers:[]
   
});
var questionModel = mongoose.model("askqustion", questionSchema);
module.exports = questionModel;
