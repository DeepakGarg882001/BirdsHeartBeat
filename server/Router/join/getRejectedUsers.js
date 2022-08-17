const router = require("../Rootroutes");
const JoinUsCol = require("../../DataBase/collections/joinUs");
const adminAuthenticate = require("../../middleware/adminAuthenticate");


router.get("/users/rejected",adminAuthenticate ,async (request,response)=>{
         
    try {

        const allUsers = await JoinUsCol.find({selected:"not_Selected"});

        if(!allUsers){
            return response.status(401).json({error:"Process Failed!"});
        }

        response.status(201).json({data:allUsers});


        
    } catch (error) {
        response.status(501).json({error});
    }

});