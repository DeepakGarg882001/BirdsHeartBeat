const router = require("../Rootroutes");
const Const_Col = require("../../DataBase/collections/constants");
const adminAuthenticate = require("../../middleware/adminAuthenticate");

router.post("" , adminAuthenticate , async(request,response) =>{
     
    try {
       
        const { link} = request.body;

        if(!link){
            return response.status(401).json({error:"Please Provide New Group Link"});
        }
        
        const updateLink = await Const_Col.updateOne({groupLink:link});

        if(!updateLink){
            return response.status(401).json({error:"Process Failed !"});
        }

        response.status(200).json({message:" Link Updated Successfully !"});

    } catch (error) {
        response.status(501).json({error});
    }

});