const router = require("../Rootroutes");
const Contact_Col = require("../../DataBase/collections/contactUS");
const adminAuthenticate = require("../../middleware/adminAuthenticate");

router.get("/contact/messages",adminAuthenticate , async(request,response)=>{

 try {
     
    getMessages = await Contact_Col.find().sort({_id:-1});

    if(!getMessages){
        return response.status(401).json({error:"Process Failed"});
    }
    
    response.status(200).json({data:getMessages});
    
 } catch (error) {
    response.status(500).json({error});
 }

});