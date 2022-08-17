import { Get_Current_User ,Remove_Current_User} from "../reduxConstants"


const CurrentUserReducer = (data=[],action)=>{

    switch(action.type){
        case Get_Current_User:
            data= action.data;
            return data;
        
        case Remove_Current_User:
            data=[];
             return data;    

        default: return data;

    }
}

export default CurrentUserReducer;