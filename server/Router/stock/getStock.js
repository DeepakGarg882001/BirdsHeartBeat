const router = require("../Rootroutes");
const Stock_Col = require("../../DataBase/collections/stock");
const admin_1Authenticate = require("../../DataBase/collections/stock");

router.get("/admin/stock", async(request,response) =>{
  
    try {


        const getData = await Stock_Col.find();

        if(!getData){
            return response.status(401).json({error:"Process Failed !"});
        }

        response.status(201).json({data:getData});
        
        
         


    } catch (error) {
        response.status(500).json({error});
    }



});