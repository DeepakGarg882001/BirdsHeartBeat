const mongoose = require("mongoose");

const UserDoc = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    token: {
      type: String,
    },
    occupation_Address: {
      type: String,
      required: true,
    },
    occupation: {
      type: String,
      required: true,
    },
    addhar_no: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
    userRole: {
      role: {
        type: String,
        default: "member",
      },
      adminId:{
        type:String
      },
      adminName:{
        type:String
      }
    },
    address: {
      type: String,
      default: "address not found",
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    forgotPassToken: {
      type: String,
    },
    otp: {
      type: Number,
    },
    userAccPlay: {
      accPlay: {
        type: String,
        default: "running",
      },
      adminId: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

const UserCol = mongoose.model("USER", UserDoc);

module.exports = UserCol;
