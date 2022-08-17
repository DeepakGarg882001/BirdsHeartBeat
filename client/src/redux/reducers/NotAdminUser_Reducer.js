import { Set_NotAdminUsers_Data } from "../reduxConstants";


const NotAdminUser_Reducer = (data=[],action) =>{

    switch(action.type){
        
        case Set_NotAdminUsers_Data : 
             data = action.data;
             return data;
       
       default : return data;
    }

}

export default NotAdminUser_Reducer;