const router = require('../Rootroutes');
const UserCol = require("../../DataBase/collections/users");

router.get("/unique/member", async(request,response)=>{

    try {

        const userId = request.query.key;
        console.log(userId);

        const getUser = await UserCol.findOne({_id:userId});

        if(!getUser){
            return response.status(401).json({error:"Process Failed !"});
        }

        response.status(200).json({data:getUser});


        
    } catch (error) {
        response.status(500).json({error});
    }

});