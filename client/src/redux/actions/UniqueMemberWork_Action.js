import { Get_UniqueMember_Work } from "../reduxConstants";

 const UniqueMemberWork =(userId)=>{

    return({
        type:Get_UniqueMember_Work,
        data:userId
    })
 }

 export default UniqueMemberWork;