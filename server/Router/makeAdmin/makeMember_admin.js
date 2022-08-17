const router = require("../Rootroutes");
const User_Col = require("../../DataBase/collections/users");
const admin_1Authenticate = require("../../middleware/admin_1Authenticate");

router.post("/member/acc/create/admin", admin_1Authenticate , async(request,response)=>{

    try {
        
        const {userId,adminId,adminName} = request.body;

        if( !userId || !adminId || !adminName ){
            return response.status(401).json({error:"Please Provide all credentials!"});
        }

        const isUserExist = await User_Col.findOne({_id:userId});

        if(!isUserExist){
            return response.status(401).json({error:"User Does Not Exist"});
        }

        const changeUserRole = await User_Col.findOneAndUpdate({_id:userId},{userRole:{role:"admin",adminId,adminName}})
        
        if(!changeUserRole){
            return response.status(401).json({error:"Process Failed !"});
        }

        response.status(200).json({message:"Successfully Updated !"});

    } catch (error) {
        response.status(501).json({error});
    }

});