import { Set_UniqueMember_Work } from "../reduxConstants";


const UniqueMemberWork_Reducer = (data=[],action)=>{

    switch(action.type){
        case Set_UniqueMember_Work:
             data= action.data;
             return data;

        default : return data;

    }
}

export default UniqueMemberWork_Reducer;