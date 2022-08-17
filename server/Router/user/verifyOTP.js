const router = require("../Rootroutes");
const jwt = require("jsonwebtoken");
const Secure_Key = process.env.JWT_KEY_OTP;


router.post("/entered/otp/verify", async(request,response)=>{

    try {
        
        const {userOtp} = request.body;
        
        
        console.log(request.cookies);
        console.log(request.body);

        const userToken = request.cookies.BHB_FgPass;
         console.log(userToken);

       if(!userToken){
        return response.status(401).json({error:" UnAuthorised User !"});
       }
        const isTokenVerified =  jwt.verify(userToken,Secure_Key);
        console.log(isTokenVerified);
        if(!isTokenVerified){
            return response.status(401).json({error:"UnAuthorised User !"});
        }

        const otp = isTokenVerified.OTP - 1;
        console.log(otp)
        if(userOtp===otp){
            response.status(201).json({message:"OTP Matched!"});
        }
        else{
            return response.status(401).json({error:" Invalid OTP !"});

        }



    } catch (error) {
        response.status(501).json({error});
    }

})