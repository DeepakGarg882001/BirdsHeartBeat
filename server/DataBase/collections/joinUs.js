const mongoose = require("mongoose");

const JoinusDoc = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true,
        minLength:[50 ,"Please enter atleast 15 word !"]
    },
    selected:{
        type:String,
        default:"none"
    }
});


const JoinUsCol = mongoose.model("JOINUS",JoinusDoc);

module.exports= JoinUsCol;