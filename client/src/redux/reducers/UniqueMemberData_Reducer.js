import { Set_UniqueMember_Data } from "../reduxConstants";


const UniqueMemberData_Reducer = (data=[],action) =>{

    switch(action.type){
        
        case Set_UniqueMember_Data : 
                data= action.data;
                return data;
        
        default : return data;

    }

}

export default UniqueMemberData_Reducer;