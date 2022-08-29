const router = require("../Rootroutes");
const Memory_Col = require("../../DataBase/collections/memory");
const UserCol = require("../../DataBase/collections/users");
const upload = require("../../middleware/uploadFile");

router.post('/admin/add/new/memory', upload,async(request,response)=>{

    try {
         
        const {userId} = request.body;

        if(!userId){
            return response.status(401).json({error:"UnAuthorised User!"});
        }

        const getUser = await UserCol.findOne({_id:userId});
       
        if(!getUser || getUser.userRole.role === "member" || getUser.userRole.role === "admin"){
            return response.status(401).json({error:"UnAuthorised User!"});
        }
       
        let FileArray = {};

        request.files.forEach((element) => {
          const file = {
            fileName: element.originalname,
            filePath: element.path,
            fileType: element.mimetype,
            fileSize: element.size,
          };
    
          FileArray = file;
        });
    
        if (!FileArray.filePath) {
          return response
            .status(401)
            .json({ error: "Please Provide The Pic" });
        }

        const savePic  = await Memory_Col.create({images:FileArray});
    
        if(!savePic){
            return response.status(401).json({error:"Process Failed!"});
        }

        response.status(201).json({message:"Successfully Updated!"});


    } catch (error) {
        response.status(500).json({error});
    }

});