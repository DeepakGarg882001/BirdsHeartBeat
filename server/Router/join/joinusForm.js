const router = require("../Rootroutes");
const JoinUsCol = require("../../DataBase/collections/joinUs");
const nodemailer = require("nodemailer");
const Const_Col = require("../../DataBase/collections/constants");



router.post('/joinus', async(request, response)=>{
     
    console.log(request.body);

  try {
    
    const { name , email , age , address , message,occupation } = request.body;

    if( !name || !email || !age || !address || !message || !occupation){
        return  response.status(401).json({error:"Please fill the form Completely !"});
    }

    const checkUser = await JoinUsCol.findOne({email});

    if(checkUser){
        return response.status(501).json({error:`Hi, ${name}. You have already Filled this Form !`});
    }
     
    const getconstants = await Const_Col.findOne();
    if(!getconstants){
        return response.status(401).json({error:"Process failed !"});
    }

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
const groupLink = getconstants.groupLink;

const mailMessage = {
    from:'birdsheartbeat.in@gmail.com',
    to:email,
    subject:" Join-Us Procedure ",
    text:`Hi,${name}. Please join the WhatsApp Group for furture Procedure to became Member of BirdsHeartBeat. Link: ${groupLink} `,
    
}

transporter.sendMail(mailMessage,async (error,info)=>{

    if(error){
        console.log(error);
        return response.status(500).json({error});
    }else{

        const data = { name , email , age , address , message,occupation };

        const addRequest = await JoinUsCol.create(data);
    
        if(addRequest){
            response.status(201).json({message:"Successfully Registered, Please Check Your Email!"});
        }else{
            response.status(401).json({error:"Message Send Process failed !"});
        }
    

    }

})
    

  } catch (error) {
    response.status(401).json({error});
  }

});