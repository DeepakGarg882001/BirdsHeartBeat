const router = require("../Rootroutes");
const UserCol = require("../../DataBase/collections/users");
const JoinUsCol = require("../../DataBase/collections/joinUs");
const bcrypt = require("bcryptjs");


router.post('/signup',async (request,response)=>{
    
    console.log(request.body);

  try {
   
    const { name , email , phone , address , occupation , password } = request.body;

    if( !name || !email || !phone || !address || !occupation || !password ){
       return response.status(401).json({error:"Please fill the form completely !"});
    }
   
    const isUserValid = await JoinUsCol.findOne({email});

    if(!isUserValid){
        return response.status(401).json({error:"Please fill Join Us form first !"});
    }

    if(isUserValid.selected == "selected"){

        const salt = bcrypt.genSaltSync();
        const secure = await bcrypt.hash(password,salt);

        const userDetails = { name , email , phone , address , occupation , password:secure };

        const addUser = await UserCol.create(userDetails);

        if(addUser){
            response.status(201).json({message:"You have Successfully Registered !"});
        }else{
            response.status(401).json({error:" Register Process Failed !"});

        }

    }else{
        return response.status(401).json({error:"You are not a Verified User !"});
        
    }

    
  } catch (error) {
    response.status(401).json({error});
  }

});