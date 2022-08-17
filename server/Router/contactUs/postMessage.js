const router = require("../Rootroutes");
const Contact_Col = require("../../DataBase/collections/contactUS");

router.post("/contact", async(request,response)=>{

    try {
       const { clientName, clientEmail, clientPhone, clientMessage } = request.body;

       if( !clientName || !clientEmail || !clientPhone || !clientMessage ){
        return response.status(401).json({error:"Please Fill the Form Completely!"});
       }
        
       const isMessageRepeated = await Contact_Col.findOne({clientEmail,clientMessage});

       if(isMessageRepeated){
         return response.status(401).json({error:"You have Already Posted same Query!"});
       }

       const saveDB = await Contact_Col.create(request.body);

       if(!saveDB){
        return response.status(401).json({error:"Process Failed !"});
       }

       response.status(201).json({message:"Message Successfully sent !. Our Team will Contact to you"});

    
    } catch (error) {
       response.status(500).json({error});
    }

});