const router = require("../Rootroutes");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const Secure_Key = process.env.JWT_KEY_OTP;
const UserCol = require("../../DataBase/collections/users");


router.post("/user/new/pass", async(request,response)=>{
 
  try {
    
     const {password} = request.body;
     console.log(password);
     if(!password){
        return response.status(401).json({error:"Please Provide New Password !"});
     }
     
     const token = request.cookies.BHB_FgPass;
     console.log(token);
      
     if(!token){
      return response.status(401).json({error:" UnAuthorised User !"});
     }
     const isTokenValid = jwt.verify(token,Secure_Key);
     console.log(isTokenValid);
     
     if(!isTokenValid){
        return response.status(401).json({error:"Time Out ,Please Try again !"});
     }

     const id= isTokenValid.id;
    
     const salt = bcrypt.genSaltSync();
     const secure = await bcrypt.hash(password,salt);
 
     const changePass = await UserCol.findByIdAndUpdate({_id:id},{password:secure});

     if(changePass){
        response.status(201).json({message:"Password Changed Successfully !"});
     }
     else{
        response.status(401).json({error:"Process Failed, Try again!"});
     }


  } catch (error) {
    response.status(501).json({error});
  }

});