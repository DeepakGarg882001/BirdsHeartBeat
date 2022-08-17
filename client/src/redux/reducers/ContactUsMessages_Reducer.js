import { Set_ContactUsMessages_Data } from "../reduxConstants";


const ContactUsMessages_Reducer = (data=[],action) =>{

    switch(action.type){
        case Set_ContactUsMessages_Data :
                   data = action.data;
                   return data;
        
       default : return data;
    }

}

export default ContactUsMessages_Reducer;