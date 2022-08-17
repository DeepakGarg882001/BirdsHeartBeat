const mongoose = require("mongoose");


const DonationGain_Doc= new mongoose.Schema({
   
  ORDERID:{
    type:String,
    select:false
  },
  TXNID:{
    type:String,
    select:false
    
  },
  TXNAMOUNT:{
    type:String
  },
  PAYMENTMODE:{
    type:String,
    select:false

  },
  CURRENCY:{
    type:String
  },
  TXNDATE:{
    type:String
  },
  STATUS:{
    type:String,
    select:false

  },
  RESPCODE:{
    type:String
  },
  GATEWAYNAME:{
    type:String,
    select:false

  },
  BANKTXNID:{
    type:String,
    select:false

  },
  BANKNAME:{
    type:String,
    select:false

  },
  DATE:{
    type:Date,
    default: Date.now()
  }
},{timestamps:true});

const DonationGain_Col = mongoose.model("DONATION_GAIN",DonationGain_Doc);

module.exports = DonationGain_Col;