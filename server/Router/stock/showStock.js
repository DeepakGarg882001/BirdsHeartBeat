const router = require("../Rootroutes");
const Stock_Col = require("../../DataBase/collections/stock");

router.get("", async(request,response)=>{

   try {
    
   } catch (error) {
    response.status(500).json({error});
   }


});