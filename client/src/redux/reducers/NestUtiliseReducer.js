import { Set_Nest_Utilse_Data } from "../reduxConstants";


const NestUtiliseReducer = (data=[],action)=>{

   
   switch(action.type){
       case Set_Nest_Utilse_Data :
           data=action.data; 
           return data;
       
       default : return data;
   }

}

export default NestUtiliseReducer;