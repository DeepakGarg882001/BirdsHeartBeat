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

         if(isUserExists){
              
            const checkPassword = await bcrypt.compare(password,isUserExists.password);
            

            if(!checkPassword){
                return response.status(401).json({error:"Invalid Credential !"});
            
            }else{
                 
             // Is Account Bolcked ?
             if(isUserExists.userAccPlay.accPlay === "block"){
                return response.status(200).json({error:"Your Account is Paused by Senior !"})
             }
             
           
            // Now Generate Token
            const data = {
                id:isUserExists._id
            } 
            const member_Key = process.env.JWT_KEY_MEMBER;
            const admin_Key = process.env.JWT_KEY_ADMIN;
            const admin_1_Key = process.env.JWT_KEY_ADMIN_1;
            
            let token = "";
            

            if(isUserExists.userRole.role === "member"){
               token = jwt.sign(data,member_Key);
            }else{

                if(isUserExists.userRole.role === "admin"){
                    token = jwt.sign(data,admin_Key);
    
                }else{

                    if(isUserExists.userRole.role === "admin_1"){
                        token = jwt.sign(data,admin_1_Key);
        
                    }
                } 
            } 
           
            console.log(token);

            // Add token to DB
            const addToken = await UserCol.findByIdAndUpdate({_id:isUserExists._id} , {token});

            const user = await UserCol.findOne({_id:isUserExists._id});

            if(addToken){
                response.status(201).cookie("BHB_token",token).json({message:"You have Successfully LogedIn !",data:user});
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