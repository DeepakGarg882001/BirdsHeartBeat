const mongoose = require("mongoose");


const Support_Doc = new mongoose.Schema({

      companyName:{
        type:"String",
        required:true
      },

      companyLogo:[Object],

      companyLink:{
        type:"String",
        required:true
      },
      adminId:{
        type:String,
        required:true
      },
      adminName:{
        type:String,
        required:true
      }
      

},{timestamps:true});

const Support_Col = mongoose.model("SUPPORTED",Support_Doc);

module.exports = Support_Col;