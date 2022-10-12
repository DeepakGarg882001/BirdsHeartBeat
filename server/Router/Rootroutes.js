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

// ======= User DashBoard ====== //
require("./dashboard/addSocialAcc");
require("./dashboard/changeDetails");
require("./dashboard/changeImg");

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
require("./members/uniqueMember");
require("./members/uniqueMemberWork");


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
require("./makeAdmin/showAllAdmins");

// ==== Supported By ====== //
require("./supportedBy/createSupportedComp");
require("./supportedBy/getSupportedComp");


// ===== ChangeLink ==== //
require("./changeGrouplink/changeLink");

// ==== Add New Memory ==== //
require("./newMemory/createMemory");
require("./newMemory/getAllMemories");


//  ======== STOCK ===== //
require("./stock/acceptItem");
require("./stock/acceptStock");
require("./stock/createStock");
require("./stock/distributeStock");
require("./stock/getStock");
require("./stock/showItem");
require("./stock/showStock");




