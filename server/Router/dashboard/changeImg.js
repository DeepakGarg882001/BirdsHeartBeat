const router = require("../Rootroutes");
const upload = require("../../middleware/uploadFile");
const UserCol = require("../../DataBase/collections/users");
const fs = require("fs");

router.post("/user/dashboard/image",upload, async (request,response)=>{
   
    try {
        
        
        const {userId} = request.body;
        console.log(userId);

        if(!userId){
            return response.status(401).json({error:"UnAuthorised User !"})
        }

        let FileObject={};

        request.files.forEach((element)=>{
             
            const file ={
                fileName: element.originalname,
                filePath:element.path,
                fileType:element.mimetype,
                fileSize:element.size
            }

            FileObject= file;
        })
       
         console.log(FileObject);

        const getUser = await UserCol.findOne({_id:userId});
        if(!getUser){
            return response.status(401).json({error:"UnAuthorised User !"})
        }

        if(getUser.image){
            fs.unlinkSync(`./${getUser.image.filePath}`);
        }

            // change img at DB

            const saveImg = await UserCol.findOneAndUpdate({_id:userId},{image:FileObject})
            const User = await UserCol.findOne({_id:userId});
            
            if(!saveImg){
                return response.status(401).json({error:"Process Failed!"})
            }
             
            response.status(201).json({message:"Profile Changed Successfuly",data:User});
       

        
    } catch (error) {
        response.status(500).json({error});
    }
});