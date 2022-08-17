import { Get_UniqueMember_Data } from "../reduxConstants";


const GetUniqueMemberData = (id)=>{
        
    return({
        type:Get_UniqueMember_Data,
        data:id
    })
}

export default GetUniqueMemberData;