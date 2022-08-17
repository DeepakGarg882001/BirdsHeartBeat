import { Set_Not_Verified_Users } from "../reduxConstants";

const NotVerifiedUserReducer =(data=[],action)=>{

    switch(action.type){
        case Set_Not_Verified_Users :
          data= action.data;
          return data;

        default : return data;
    }

}

export default NotVerifiedUserReducer;



