


const validatePostWork =(request,response,next)=>{
  try {
     
     console.log("validate fn");
     console.log(request.form-data);
    const { type, userId,userName,amount,location } = request.form-data;

    if( !type || !userId || !userName || !amount || !location ){
        return response.status(401).json({error:"Please fill the Form Completely !"})
    }
    console.log(request.files);
    if(!request.files){
        return response.status(401).json({error:"Please fill the Form Completely !"})

    }

    next();
    
  } catch (error) {
    response.status(500).json({error});
  }
}

module.exports=validatePostWork;