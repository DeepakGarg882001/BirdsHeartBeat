import { Set_Others_Utilse_Data } from "../reduxConstants";


const OthersUtiliseReducer = (data=[],action)=>{

   
   switch(action.type){
       case Set_Others_Utilse_Data :
           data=action.data; 
           return data;
       
       default : return data;
   }

}

export default OthersUtiliseReducer;