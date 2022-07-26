const router = require("../Rootroutes");
const Const_Col = require("../../DataBase/collections/constants");

router.get('/balance/status', async(request,response)=>{

    try {
        
        const data = await Const_Col.findOne();

        if(!data){
            return response.status(401).json({error:"something went wrong !"});
        }

        response.status(200).json({data});
         

    } catch (error) {
        response.status(500).json({error});
    }
});