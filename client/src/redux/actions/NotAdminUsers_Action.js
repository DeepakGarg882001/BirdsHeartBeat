import { Get_NotAdminUsers_Data } from "../reduxConstants"; 


const NotAdmin_Users = (query)=>{
  
    return({
        type:Get_NotAdminUsers_Data,
        query
    })
}

export default NotAdmin_Users;