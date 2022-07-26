const router = require("../Rootroutes");
const JoinUsCol = require("../../DataBase/collections/joinUs");


router.post("/join/approve", async (request, response)=>{
     
    console.log(request.body);

    try {
        const {email,action} = request.body;
 
        const findUser = await JoinUsCol.findOneAndUpdate({email},{selected:action});
        
        if(findUser){
            response.status(201).json({message:"User Successfully Verified !"});
        }else{
            response.status(401).json({error:" Process failed ! "});
        }
       

    } catch (error) {
        response.status(401).json({error});
    }

});