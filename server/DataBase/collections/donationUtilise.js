const mongoose = require("mongoose");


const DonationUtilise_Doc= new mongoose.Schema({
   
  type:{
     type:String,
  },  
  userId:{
    type:String,
  },
  userName:{
    type:String
  },
  amount:{
    type:String
  },
  location_latitude:{
        type:String
      },
  location_longitude:{
        type:String
      },
  images:[Object],  
  date:{
    type:Date,
    default: Date.now()
  }
});

const DonationUtilise_Col = mongoose.model("DONATION_UTILISE",DonationUtilise_Doc);

module.exports = DonationUtilise_Col;