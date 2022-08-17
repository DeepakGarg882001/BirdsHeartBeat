const UserCol = require("../DataBase/collections/users");
const jwt = require("jsonwebtoken");

const Secure_Key1 = process.env.JWT_KEY_ADMIN;
const Secure_Key2 = process.env.JWT_KEY_ADMIN_1;


const adminAuthenticate = async (request,response,next)=>{

    try {

        const token = request.cookies.BHB_token;


        const isValidToken1 =  jwt.verify(token ,Secure_Key1);
        const isValidToken2 =  jwt.verify(token ,Secure_Key2);
        
        let id = "";

        if(!isValidToken1){

            if(!isValidToken2){
                    return response.status(401).json({error:"UnAuthorised User !"});
            }else{
                id= isValidToken2.id;
            }

        }else{
          id= isValidToken1.id;
        }
        
        const findUser = await UserCol.findById(id);

        if(findUser){
             
            if( findUser.userRole.role === 'admin' || findUser.userRole.role === 'admin_1'){
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

module.exports = adminAuthenticate;