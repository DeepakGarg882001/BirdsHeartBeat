const router = require("../Rootroutes");
const UserCol = require("../../DataBase/collections/users");


router.post('/user/dashboard/detail', async(request,response)=>{

    try {
         
       const {userId,name,phone,address,status,occupation} = request.body;

       if( !userId || !name || !phone || !address || !status || !occupation ){
           return response.status(401).json({error:"Please Provide All Details!"});
       }
       
       const getUser = await UserCol.findOne({_id:userId});

       if(!getUser){
        return response.status(401).json({error:"User Does Not Exist"});
       }

       const saveDetails = await UserCol.findOneAndUpdate({_id:userId},{userId,name,phone,address,status,occupation})
         
       if(!saveDetails){
        return response.status(401).json({error:"Process Failed!"});
       }

       const User = await UserCol.findOne({_id:userId});
       
       response.status(200).json({message:"Successfully Updated! ",data:User});
        
    } catch (error) {
        response.status(500).json({error})
        
    }
})