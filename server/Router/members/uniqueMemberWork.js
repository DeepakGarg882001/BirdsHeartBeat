const router = require('../Rootroutes');
const DonationUtilise_Col = require("../../DataBase/collections/donationUtilise");

router.get("/work/unique/member", async(request,response)=>{

    try {

        const userId = request.query.key;
        console.log(userId);

        const getWork = await DonationUtilise_Col.find({userId:userId});

        if(!getWork){
            return response.status(401).json({error:"Process Failed !"});
        }
        console.log(getWork);
        response.status(200).json({data:getWork});


        
    } catch (error) {
        response.status(500).json({error});
    }

});