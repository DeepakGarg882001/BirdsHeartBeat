import { Set_New_Memories } from "../reduxConstants";



const NewMemories_Reducer = (data=[],action)=>{
  
    switch(action.type){
        case Set_New_Memories:
           data= action.data;
           return data;

        default : return data;
    }

}

export default NewMemories_Reducer;