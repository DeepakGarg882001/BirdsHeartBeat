import { Get_Members_Data } from "../reduxConstants";


const GetMembersData = (query)=>{

    return({
        type:Get_Members_Data,
        query
    })
}

export default GetMembersData;