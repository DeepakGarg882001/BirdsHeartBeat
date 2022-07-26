const multer = require("multer")


const upload = multer({
    storage:multer.diskStorage({
        destination:function(request,files,cb){
            cb(null , "filesUpload")
        },

        filename:function( request,files ,cb){
            let fileFormat = files.mimetype.split('/');
            let extn=fileFormat[fileFormat.length-1];
            let fileName = files.originalname.split("."+extn);
            cb(null , fileName+Date.now()+"."+extn)
        }
    })
}).array("file")

module.exports=upload;