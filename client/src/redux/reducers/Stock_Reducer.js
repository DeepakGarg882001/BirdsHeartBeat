
import { Set_Stock_Data } from "../reduxConstants";


const Stock_Reducer = (data=[],action) =>{

    switch(action.type){
         case Set_Stock_Data: 
           data = action.data;
           return data;

         default : return data;

    }

}

export default Stock_Reducer;