import { Set_All_Admins } from "../reduxConstants";


const ShowAllAdmins_Reducer = (data=[],action) =>{

    switch(action.type){

      case Set_All_Admins: 
             data = action.data;
             return data;

      default: return data; 
            
    }
}

export default ShowAllAdmins_Reducer;