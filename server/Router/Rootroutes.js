const express= require("express");
const router=express.Router();

require("../DataBase/DB");
module.exports=router;


// ===== JOIN US Routes ====== //
require("./join/approveUser");
require("./join/joinusForm");


// ===== USER ROUTE ===== //
require("./user/login");
require("./user/signUp");


// ===== DONATION ROUTE ====== //
require("./donation/donation");
require("./donation/paytmCallBack");


// ===== Balance Status ==== //
require("./balance/balanceStatus");


// ===== Lists ===== //
require("./lists/donationGainList");
require("./lists/donationUtiliseList");


// ==== Forms ====== //
require("./forms/postWorkBill");
