const router = require("../Rootroutes");
const JoinUsCol = require("../../DataBase/collections/joinUs");


router.post('/joinus', async(request, response)=>{
     
    console.log(request.body);

  try {
    
    const { name , email , phone , address , message } = request.body;

    if( !name || !email || !phone || !address || !message ){
        return  response.status(401).json({error:"Please fill the form Completely !"});
    }

    const checkUser = await JoinUsCol.findOne({email});

    if(checkUser){
        return response.status(501).json({error:"User  already Filled this Form !"});
    }
     
    const data = { name , email , phone , address , message };

    const addRequest = await JoinUsCol.create(data);

    if(addRequest){
        response.status(201).json({message:"Message Successfully Send !"});
    }else{
        response.status(401).json({error:"Message Send Process failed !"});
    }


    
  } catch (error) {
    response.status(401).json({error});
  }


});