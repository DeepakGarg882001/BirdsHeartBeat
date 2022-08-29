const router = require("../Rootroutes");
const UserCol = require("../../DataBase/collections/users");

router.post("/user/dashboard/social", async(request,response)=>{

    try {
        
       const { userId , accountName , accountLink} = request.body;
       
       if(!userId || !accountName || !accountLink){
        return response.status(401).json({error:"Please Provide all Details!"});
       }
       
       let getUser;

       
        if(accountName === "instagram"){ 
         getUser = await UserCol.findOneAndUpdate({_id:userId},{"socialAcc.instagram":accountLink});
        } 
        else if(accountName === "facebook"){
         getUser = await UserCol.findOneAndUpdate({_id:userId},{"socialAcc.facebook":accountLink});
       } 
       else if(accountName === "linkedin"){
         getUser = await UserCol.findOneAndUpdate({_id:userId},{"socialAcc.linkedin":accountLink});
       } 
       else if(accountName === "youtube"){
         getUser = await UserCol.findOneAndUpdate({_id:userId},{"socialAcc.youtube":accountLink});
       }
       else if(accountName === "github"){
         getUser = await UserCol.findOneAndUpdate({_id:userId},{"socialAcc.github":accountLink});
       } 
       else if(accountName === "whatsApp"){
         getUser = await UserCol.findOneAndUpdate({_id:userId},{"socialAcc.whatsApp":accountLink});
       } 
       
      

       if(!getUser){
        return response.status(401).json({error:"Process Failed!"})
       }

       const UserIs = await UserCol.findOne({_id:userId});

       response.status(200).json({message:"Successfully Updated!",data:UserIs});

       

    } catch (error) {
        response.status(500).json({error})
    }

})
