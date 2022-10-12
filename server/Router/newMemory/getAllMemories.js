const router = require("../Rootroutes");
const Memory_Col = require("../../DataBase/collections/memory");


router.get("/home/memories", async(request,response)=>{

   try {
    
      const memories = await Memory_Col.find();

      if(!memories){
         return response.status(401).json({error:"Process Failed !"})
      }

      response.status(200).json({data:memories})

   } catch (error) {
     response.status(500).json({error});
   }

});