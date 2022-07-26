const router = require("../Rootroutes");
const DonationUtilise_Col  = require("../../DataBase/collections/donationUtilise");

router.get("/donation/utilise/list", async(request,response)=>{
  
   try {
      const query = request.query;
     
      const getData = await DonationUtilise_Col.find(query).sort({_id:-1});
      console.log(getData);
      
      if(!getData){
        return response.status(401).json({error:"Unable to get Data!"});
      }

      response.status(200).json({data:getData});


   } catch (error) {
     response.status(500).json({error});
   }

});