const mongoose = require("mongoose");

const UserDoc = new mongoose.Schema({
     
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
    password:{
        type:String,
        required:true
    },
    token:{
        type:String
    },
    address:{
        type:String,
        required:true
    },
    occupation:{
        type:String,
        required:true
    }


});


const UserCol = mongoose.model("USER",UserDoc);

module.exports = UserCol;