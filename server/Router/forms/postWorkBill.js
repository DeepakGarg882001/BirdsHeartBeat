const router = require("../Rootroutes");
const Const_Col = require("../../DataBase/collections/constants");
const DonationUtilise_Col = require("../../DataBase/collections/donationUtilise");
const upload = require("../../middleware/uploadFile");
const memberAuthenticate = require("../../middleware/memberAuthenticate");



router.post("/api/post/v/work/bill" , memberAuthenticate , upload , async (request,response)=>{
   
    try {
        

        const { type, userId,userName,amount,location_latitude,location_longitude } = request.body;

        if( !type || !userId || !userName || !amount || !location_latitude ||!location_longitude ){
            return response.status(401).json({error:"Please fill the Form Completely !"})
         }

        const FileArray=[];

        request.files.forEach((element)=>{
             
            const file ={
                fileName: element.originalname,
                filePath:element.path,
                fileType:element.mimetype,
                fileSize:element.size
            }

            FileArray.push(file);
        })
       
        const Amount= Number(amount);
        
        const completeData = {
            type, userId,userName,amount:Amount,location_latitude,location_longitude,images:FileArray
        }
       
           
        const isFormRepeated = await DonationUtilise_Col.findOne({userId,type,location_latitude,location_longitude,amount:Amount});

        if(isFormRepeated){
             const previousDate = (isFormRepeated.date).toLocaleDateString();
             const current = new Date();
             const currentDate = current.toLocaleDateString();

             if(currentDate===previousDate){
                return response.status(401).json({error:"Can't Upload same Data on same Day!"})
             }
        }

        // Get all Constants Value
        const getConstants = await Const_Col.findOne();
        if(!getConstants){
            return response.status(401).json({error:"Process Failed !"});
        }

        const foodPay= getConstants.total_food_amount;
        const healthPay= getConstants.total_health_amount;
        const materialPay = getConstants.total_material_amount;
        const nestPay = getConstants.total_nest_amount;
        const otherPay = getConstants.total_others_amount;
        const payUtilised = getConstants.total_donation_utilised;
         // update Total PayUtilised value
            const updatePayUtilised = Amount+payUtilised;

        if(type==='food'){
            const updateFoodPay = Amount+foodPay;
            await Const_Col.findOneAndUpdate({ total_food_amount:updateFoodPay , total_donation_utilised:updatePayUtilised });
        }
        else if(type==='material'){
            const updateMaterialPay = Amount+materialPay;
            await Const_Col.findOneAndUpdate({ total_material_amount:updateMaterialPay , total_donation_utilised:updatePayUtilised });
        }
        else if(type==='health'){
            const updateHealthPay = Amount+healthPay;
            await Const_Col.findOneAndUpdate({ total_health_amount:updateHealthPay , total_donation_utilised:updatePayUtilised });
        }
        else if(type==='nest'){
            const updateNestPay = Amount+nestPay;
            await Const_Col.findOneAndUpdate({ total_nest_amount:updateNestPay , total_donation_utilised:updatePayUtilised });
        }
        else if(type==='others'){
            const updateOthersPay = Amount+otherPay;
            await Const_Col.findOneAndUpdate({ total_others_amount:updateOthersPay,total_donation_utilised:updatePayUtilised });
        }
      

      // Now Store the Data to DB
       const saveData = await DonationUtilise_Col.create(completeData);

       if(!saveData){
        return response.status(401).json({error:"Process Failed !"});
       }

       response.status(200).json({message:" Work Saved Successfully !"})


    } catch (error) {
        response.status(401).json({error});
    }

});