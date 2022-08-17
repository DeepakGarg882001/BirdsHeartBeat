const router= require("../Rootroutes");
const UserCol = require("../../DataBase/collections/users");
const jwt = require("jsonwebtoken");
const nodemailer= require("nodemailer");
const Secure_Key = process.env.JWT_KEY_OTP;

router.post("/user/forgot/pass", async(request,response)=>{

try {
     const {email}= request.body;
    
     if(!email){
        return response.status(401).json({error:"Please Provide an Email!"});
     }
     
     const isEmailExist = await UserCol.findOne({email});

     if(!isEmailExist){
        return response.status(401).json({error:"Account with this Email does not Exist !"});
     }



    const otp = Math.floor((1000+Math.random() * 9000) );
    
    const data = {
        OTP:otp+1,
        id:isEmailExist._id
    }

    forgotPassToken = jwt.sign(data , Secure_Key ,{expiresIn:"0.5h"});
    
   
     

    const transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        requireTLS:true,
        auth:{
            user:'birdsheartbeat.in@gmail.com',
            pass:'jsibsanmsicmjest'
        }
    })
    
    
    const mailMessage = {
        from:'birdsheartbeat.in@gmail.com',
        to:email,
        subject:" Join-Us Procedure ",
        text:`Hi, the secret OTP code is : ${otp} . Please never share with others. `,
        
    }
    
    transporter.sendMail(mailMessage,async (error,info)=>{
    
        if(error){
            return response.status(500).json({error});
        }else{

           response.status(201).cookie("BHB_FgPass",forgotPassToken).json({token:forgotPassToken});
        }
    
    })


} catch (error) {
    
}

});