const router = require("../Rootroutes");
const Contact_Col = require("../../DataBase/collections/contactUS");
const adminAuthenticate = require("../../middleware/adminAuthenticate");


router.post("/contact/status", adminAuthenticate , async(request,response)=>{

 try {
    
 } catch (error) {
    response.status(500).json({error});
 }

});