const router = require("../Rootroutes");
const Const_Col = require("../../DataBase/collections/constants");
const adminAuthenticate = require("../../middleware/adminAuthenticate");

router.post("/admin/change/link" , adminAuthenticate , async(request,response) =>{
     
    try {
       
        const { link,adminId} = request.body;

        if(!link){
            return response.status(401).json({error:"Please Provide New Group Link"});
        }
        
        const updateLink = await Const_Col.findOneAndUpdate({},{groupLink:link,$push:{linkChanges:{link,adminId}}});

        if(!updateLink){
            return response.status(401).json({error:"Process Failed !"});
        }

        response.status(200).json({message:" Link Updated Successfully !"});

    } catch (error) {
        response.status(501).json({error});
    }

});