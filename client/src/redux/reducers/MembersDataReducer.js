import { Set_Members_Data } from "../reduxConstants";

const MembersDataReducer = (data=[],action)=>{

    switch(action.type){
      case Set_Members_Data :
              data= action.data;
              return data;
              
      default: return data;        
    }

}

export default MembersDataReducer;