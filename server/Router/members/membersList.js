const router = require("../Rootroutes");
const UserCol = require("../../DataBase/collections/users");

router.get("/members/all", async(request,response)=>{
  
    try {
        const query = request.query.key;
           console.log(query);
        const getMembers = await UserCol.find({
            "$or":[
                {"name":{$regex:query,$options:"i"}},
                {"address":{$regex:query,$options:"i"}},
                {"occupation":{$regex:query,$options:"i"}},
            ]
        }).sort({_id:-1});
        if(!getMembers){
            return response.status(401).json({error:"Process Failed !"})
        }
        response.status(201).json({data:getMembers});
        
    } catch (error) {
        response.status(500).json({error});
    }
});