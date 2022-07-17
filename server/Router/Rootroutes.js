const express= require("express");
const router=express.Router();

require("../DataBase/DB");
module.exports=router;


// ===== JOIN US Routes ======

require("./join/approveUser");
require("./join/joinusForm");



// ===== USER ROUTE =====

require("./user/login");
require("./user/signUp");


