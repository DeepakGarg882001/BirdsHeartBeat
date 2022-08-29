import { Get_All_Admins } from "../reduxConstants";


const GetAllAdmins =(query)=>{

    return ({
        type:Get_All_Admins,
        query
    })
}

export default GetAllAdmins;