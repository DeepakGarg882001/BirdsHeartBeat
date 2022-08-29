const mongoose = require("mongoose");

const JoinusDoc = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    occupation: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
      minLength: [40, "Please enter atleast 15 word !"],
    },
    selected: {
      type: String,
      default: "none",
    },
    approvedBy:[
        {
            adminId: {
                type: String,
              },
              adminName: {
                type: String,
              },
              action:{
                type:String
              }
        }
    ]
    
  },
  { timestamps: true }
);

const JoinUsCol = mongoose.model("JOINUS", JoinusDoc);

module.exports = JoinUsCol;
