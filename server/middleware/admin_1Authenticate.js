const UserCol = require("../DataBase/collections/users");
const jwt = require("jsonwebtoken");

const Secure_Key = process.env.JWT_KEY_ADMIN_1;

const admin_1Authenticate = async (request,response,next)=>{

    try {

        const token = request.cookies.BHB_token;

        const isValidToken =  jwt.verify(token ,Secure_Key);

        if(!isValidToken){
            return response.status(401).json({error:"UnAuthorised User !"});
        }

        const id = isValidToken.id;
        
        const findUser = await UserCol.findById(id);

        if(findUser){
             
            if( findUser.userRole.role === 'admin_1'){
                next();
            }
            else{
               return response.status(401).json({error:"UnAuthorised User !"});
            }

        }else{
            response.status(401).json({error:"Authentication Process failed !"});
        }


        
    } catch (error) {
        response.status(501).json({error});
    }

}

module.exports = admin_1Authenticate;