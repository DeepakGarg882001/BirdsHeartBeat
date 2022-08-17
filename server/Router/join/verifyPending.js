const router = require("../Rootroutes");
const JoinUsCol = require("../../DataBase/collections/joinUs");
const adminAuthenticate = require("../../middleware/adminAuthenticate");


router.get("/join/pending/users",adminAuthenticate ,async (request, response)=>{
     
   

    try {
        
        const Users = await JoinUsCol.find({selected:"none"})
        
        if(Users){
            response.status(201).json({data:Users});
        }else{
            response.status(401).json({error:" Process failed ! "});
        }
       

    } catch (error) {
        response.status(401).json({error});
    }

});