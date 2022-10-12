import { Set_Supported_Memories } from "../reduxConstants";



const SupportedMemories_Reducer = (data=[], action)=>{

    switch(action.type){
        case Set_Supported_Memories: 
             data = action.data;
             return data;

        default : return data;
    }


}

export default SupportedMemories_Reducer;