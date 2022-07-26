const router = require("../Rootroutes");
const DonationGain_Col = require("../../DataBase/collections/donationGain");

router.get("/donation/gain/list", async(request,response)=>{
   
    try {
        
        const getList = await DonationGain_Col.find().sort({_id:-1});

        if(!getList){
           return response.status(401).json({error:"Unable to get List"});
        }

        response.status(200).json({data:getList,message:"success"});


    } catch (error) {
        response.status(500).json({error})
    }
});

