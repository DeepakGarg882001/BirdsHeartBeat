
const Suggestion_Col = require("../../DataBase/collections/suggestion");
const router = require("../Rootroutes");


router.post('/suggestion', async(request,response)=>{
    try {
        
        const {suggestion}= request.body;

        if(!suggestion){
            return response.status(402).json({error:"Please Provide Suggestion!"})
        }
         
        
        const storeDB = await Suggestion_Col.create({suggestion});

        if(!storeDB){
            return response.status(500).json({error:"Process Failed!"});
        }

        response.status(200).json({message:"Suggestion saved Successfully!"});


    } catch (error) {
        response.status(500).json({error});
    }
})