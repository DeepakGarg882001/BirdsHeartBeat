const router = require("../Rootroutes");
const JoinUsCol = require("../../DataBase/collections/joinUs");
const nodemailer = require("nodemailer");
const adminAuthenticate = require("../../middleware/adminAuthenticate");

router.post("/join/approve", adminAuthenticate ,async (request, response) => {
  console.log(request.body);

  try {
    const { email, action, name, memberId, memberName } = request.body;


    if( !email || !action || !name || !memberId || !memberName ){
        return response.status(401).json({error:"Please Provide all Credentails!"});
    } 
   
    const isUserNeverVerified = await JoinUsCol.findOne({email,selected:"none"}); 
    
    if(!isUserNeverVerified){
        return response.status(401).json({error:"User Already Verified, Can not Verify Again!"});
    }


    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: "birdsheartbeat.in@gmail.com",
        pass: "jsibsanmsicmjest",
      },
    });

    const selectedMessage = {
      from: "birdsheartbeat.in@gmail.com",
      to: email,
      subject: " Join-Us Procedure ",
      text: `Hi,${name}. Please join the WhatsApp Group for furture Procedure to became Member of BirdsHeartBeat. Link: https://chat.whatsapp.com/E3BtLbn25P91SiRi9mvLKd `,
    };
    const rejectedMessage = {
      from: "birdsheartbeat.in@gmail.com",
      to: email,
      subject: " Join-Us Procedure ",
      text: `Hi, ${name}. We are Thankfull to you that you show your interest for BirdsHeartBeat. We respect your Time, efforts and felling regards BirdsHeartBeat. But we are Sorry to say that durring the whole Procedure of Joining-Us as a Member , you seems to be not comfortable for organization. Our Team make you judge upto this Time. Please Try once more after 1 month. upto that your email will be Paused for BirdsHeartBeat Organization. Thank-you !`,
    };
    transporter.sendMail(
      action === "selected" ? selectedMessage : rejectedMessage,
      async (error, info) => {
        if (error) {
          console.log(error);
          return response.status(500).json({ error });
        } else {
          console.log("mal successfully send !");

          const findUser = await JoinUsCol.findOneAndUpdate(
            { email },
            { selected: action, memberId, memberName }
          );

          if (findUser) {
            response
              .status(201)
              .json({ message: "User Successfully Verified !" });
          } else {
            response.status(401).json({ error: " Process failed ! " });
          }
        }
      }
    );
  } catch (error) {
    response.status(401).json({ error });
  }
});
