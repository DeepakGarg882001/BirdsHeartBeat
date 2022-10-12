const router = require("../Rootroutes");
const Stock_Col = require("../../DataBase/collections/stock");
const admin_1Authenticate = require("../../middleware/admin_1Authenticate");

router.post("", async(request,response)=>{

    try {

        


        
    } catch (error) {
        response.status(500).json({error});
    }

})