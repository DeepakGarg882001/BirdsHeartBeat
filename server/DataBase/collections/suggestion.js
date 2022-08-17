const mongoose = require("mongoose");

const Suggestion_Doc = new mongoose.Schema({
    suggestion:{
        type:String,
        required:true
    },
    
},{timestamps:true})


const Suggestion_Col = mongoose.model("SUGGESTION",Suggestion_Doc);

module.exports = Suggestion_Col;