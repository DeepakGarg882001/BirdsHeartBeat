const router = require("../Rootroutes");
const UserCol = require("../../DataBase/collections/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/login", async (request,response)=>{
       
    console.log(request.body);

    try {
     
         const { email , password }= request.body;

         if( !email || !password ){
            return response.status(401).json({error:"Please Fill the form Completely"});

         }
        
         const isUserExists = await UserCol.findOne({email});
         console.log(isUserExists);

         if(isUserExists){
              
            const checkPassword = await bcrypt.compare(password,isUserExists.password);
            
            console.log(checkPassword);

            if(!checkPassword){
                return response.status(401).json({error:"Invalid Credential !"});
            
            }else{

           
            // Now Generate Token
            const data = {
                id:isUserExists._id
            } 
            const Secure_Key = process.env.JWT_KEY;
            const token = jwt.sign(data,Secure_Key);

            // Add token to DB
            console.log(token);
            const addToken = await UserCol.findByIdAndUpdate(isUserExists._id , {token});
            console.log(addToken);
            if(addToken){
                response.status(201).cookie("BHB_token",token).json({message:"You have Successfully LogedIn !"});
            }else{
                response.status(401).json({error:" Login Process failed !"});
            }

          }

         }else{
            return response.status(401).json({error:"Invalid Credential !"});
         }

        
    } catch (error) {
        response.status(401).json({error});
    }


});