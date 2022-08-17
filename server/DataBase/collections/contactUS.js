const mongoose = require("mongoose");


const Contact_Doc = new mongoose.Schema({

    clientName:{
        type:String,
        required:true
    },
    clientEmail:{
        type:String,
        required:true
    },
    clientPhone:{
        type:Number,
        required:true
    },
    clientMessage:{
        type:String,
        required:true
    }

},{timestamps:true});

const Contact_Col = mongoose.model("CONTACT_MESSAGE",Contact_Doc);

module.exports=Contact_Col;