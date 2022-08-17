
import { Get_Current_User ,Remove_Current_User} from "../reduxConstants";

export const GetCurrentUser =(data)=>{

    return({
        type:Get_Current_User,
        data
    })

}


export const LogOut_User= () =>{
   
    return({
        type:Remove_Current_User
    })
}