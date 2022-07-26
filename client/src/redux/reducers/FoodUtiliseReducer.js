import {Set_Food_Utilse_Data} from "../reduxConstants";


const FoodUtiliseReducer = (data=[],action)=>{

    
    switch(action.type){
        case Set_Food_Utilse_Data :
            data=action.data; 
            return data;
        
        default : return data;
    }

}

export default FoodUtiliseReducer;