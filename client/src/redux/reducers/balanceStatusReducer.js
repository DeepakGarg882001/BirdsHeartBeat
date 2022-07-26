import { Set_Balance_Status } from "../reduxConstants";

const BalanceStatusReducer=(data=[],action)=>{
 
    switch(action.type){
        
        case Set_Balance_Status :
                  data= action.data;
                 return data;

        default: return data;
    }

}

export default BalanceStatusReducer;