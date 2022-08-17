import { Set_RejectedUsers_Data } from "../reduxConstants";


const RejectedUser_Reducer = (data=[],action) =>{

    switch(action.type){
      
        case Set_RejectedUsers_Data : 
              data = action.data;
              return data;

        default : return data;

    }

}

export default RejectedUser_Reducer;