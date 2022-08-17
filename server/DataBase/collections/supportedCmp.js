const mongoose = require("mongoose");


const Support_Doc = new mongoose.Schema({

      companyName:{
        type:"String",
        required:true
      },

      companyLogo:{
        type:"String",
        required:true
      },

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

const Support_Col = mongoose.model("SUPPORTED_BY",Support_Doc);

module.export = Support_Col;