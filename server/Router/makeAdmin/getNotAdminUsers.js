const router = require("../Rootroutes");
const User_Col = require("../../DataBase/collections/users");
const admin_1Authenticate = require("../../middleware/admin_1Authenticate");

router.get("/users/members/not/admin", admin_1Authenticate ,async(request,response)=>{

    try {
          
        const getMembers = await User_Col.find({userRole:{role:"member"}});
        
        if(!getMembers){
            return response.status(401).json({error:"Process Failed !"});
        }

        response.status(200).json({data:getMembers});
        
    } catch (error) {
        response.status(501).json({error});
    }


});