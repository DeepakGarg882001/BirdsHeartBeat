const router = require("../Rootroutes");
const JoinUsCol = require("../../DataBase/collections/joinUs");
const nodemailer = require("nodemailer");
const adminAuthenticate = require("../../middleware/adminAuthenticate");

router.post("/user/rejected/remove", adminAuthenticate , async(request,response)=>{
  
    try {
        const {userId} = request.body;
        console.log(userId);
        if(!userId){
            return response.status(401).json({error:"Please Provide User details"});
        }

        const userIs = await JoinUsCol.findOne({_id:userId});
        if(!userIs){
            return response.status(401).json({error:"Process Failed !"});
        }
        console.log(userIs);
        
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
            to:userIs.email,
            subject:" Join-Us Procedure ",
            text:`Hi,${userIs.name}. Now you can apply for BirdsHeartbeat to join as a Member.`,
            
        }
        
        transporter.sendMail(mailMessage,async (error,info)=>{
        
            if(error){
                console.log(error);
                return response.status(500).json({error});
            }else{
        
                const removeUser = await JoinUsCol.findOneAndRemove({_id:userId});

        if(!removeUser){
            return response.status(401).json({error:"Process Failed !"});
        }

        response.status(201).json({message:" Successfully Removed !"});
        
            }
        
        })
            

        
        
       

    } catch (error) {
        response.status(501).json({error});
    }


});