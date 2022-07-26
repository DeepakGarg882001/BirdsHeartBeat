import {Set_Material_Utilse_Data} from "../reduxConstants";


const MaterialUtiliseReducer = (data=[],action)=>{

   
   switch(action.type){
       case Set_Material_Utilse_Data :
           data=action.data; 
           return data;
       
       default : return data;
   }

}

export default MaterialUtiliseReducer;