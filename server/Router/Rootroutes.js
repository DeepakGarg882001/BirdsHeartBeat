const express= require("express");
const router=express.Router();

require("../DataBase/DB");
module.exports=router;


// ===== JOIN US Routes ====== //
require("./join/approveUser");
require("./join/joinusForm");
require("./join/verifyPending");


// ===== Rejected Users ====== //
require("./join/getRejectedUsers");
require("./join/deletRejectedUser");


// ===== USER ROUTE ===== //
require("./user/login");
require("./user/signUp");



// ====== Account Pause Play ======= //
require("./makeAdmin/pauseUser");

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


// ===== Members ===== //
require("./members/membersList");


// ====== Suggestions ===== //
require("./suggestion/createSuggestion");
require("./suggestion/getSuggestion");


// ===== Contact Us ===== //
require("./contactUs/getContactMessages");
require("./contactUs/postMessage");
require("./contactUs/updateStatus");

// ====== Forgot-Password ==== //
require("./user/forgotPass");
require("./user/changePass");
require("./user/verifyOTP");

// ===== Make Admin ===== //
require("./makeAdmin/getNotAdminUsers");
require("./makeAdmin/makeMember_admin");

// ==== Supported By ====== //
require("./supportedBy/createSupportedComp");
require("./supportedBy/getSupportedComp");