const router = require("../Rootroutes");
const Support_Col = require("../../DataBase/collections/supportedCmp");


router.get("" , async(request,response) =>{
 
    try {
        
        const allComp = await Support_Col.find();

        if(! allComp){
            return response.status(401).json({error:" Process Failed !"});
        }

        response.status(200).json({data:allComp});

        
    } catch (error) {
        response.status(501).json({error});
    }


})