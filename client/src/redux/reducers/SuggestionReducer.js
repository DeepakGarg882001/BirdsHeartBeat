import { Set_Suggestion_Data } from "../reduxConstants";


const SuggestionReducer = (data=[],action)=>{

    switch(action.type){
        case Set_Suggestion_Data : 
               data= action.data;
               return data;
        
        default : return data;
    }

}

export default SuggestionReducer;