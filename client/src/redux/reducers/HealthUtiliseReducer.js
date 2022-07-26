import {Set_Health_Utilse_Data} from "../reduxConstants";


const HealthUtiliseReducer = (data=[],action)=>{

   
   switch(action.type){
       case Set_Health_Utilse_Data :
           data=action.data; 
           return data;
       
       default : return data;
   }

}

export default HealthUtiliseReducer;