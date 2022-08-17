
const Suggestion_Col = require("../../DataBase/collections/suggestion");
const router = require("../Rootroutes");


router.get('/suggestion', async(request,response)=>{
    try {
        
      const getSussestions = await Suggestion_Col.find().sort({_id:-1});
       
      if(!getSussestions){
        return response.status(500).json({error:"Process Failed!"});
      }

      response.status(201).json({data:getSussestions});

    } catch (error) {
        response.status(500).json({error});
    }
})