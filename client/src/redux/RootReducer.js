import { combineReducers } from "redux";

import DonationGainReducer from "./reducers/donationGainReducer";
import BalanceStatusReducer from "./reducers/balanceStatusReducer";
import FoodUtiliseReducer from "./reducers/FoodUtiliseReducer";
import MaterialUtiliseReducer from "./reducers/MaterialUtiliseReducer.";
import HealthUtiliseReducer from "./reducers/HealthUtiliseReducer";
import NestUtiliseReducer from "./reducers/NestUtiliseReducer";
import OthersUtiliseReducer from "./reducers/OthersUtiliseReducer.";
import NotVerifiedUserReducer from "./reducers/notVerifiedUserReducer";
import MembersDataReducer from "./reducers/MembersDataReducer";
import CurrentUserReducer from "./reducers/CurrentUserReducer";
import SuggestionReducer from "./reducers/SuggestionReducer";
import NotAdminUser_Reducer from "./reducers/NotAdminUser_Reducer";
import RejectedUser_Reducer from "./reducers/RejectedUsers_Reducer"; 
import ContactUsMessages_Reducer from "./reducers/ContactUsMessages_Reducer";
import UniqueMemberData_Reducer from "./reducers/UniqueMemberData_Reducer";
import ShowAllAdmins_Reducer from "./reducers/ShowAllAdmins_Reducer";
import UniqueMemberWork_Reducer from "./reducers/UniqueMemberWork_Reducer";
import Stock_Reducer from "./reducers/Stock_Reducer";
import SupportedMemories_Reducer from "./reducers/SupportedMemories_Reducer";
import NewMemories_Reducer from "./reducers/NewMemories_Reducer";

const RootReducer = combineReducers({

    DonationGainReducer,
    BalanceStatusReducer,
    FoodUtiliseReducer,
    MaterialUtiliseReducer,
    HealthUtiliseReducer,
    NestUtiliseReducer,
    OthersUtiliseReducer,
    NotVerifiedUserReducer,
    MembersDataReducer,
    CurrentUserReducer,
    SuggestionReducer,
    NotAdminUser_Reducer,
    RejectedUser_Reducer,
    ContactUsMessages_Reducer,
    UniqueMemberData_Reducer,
    ShowAllAdmins_Reducer,
    UniqueMemberWork_Reducer,
    Stock_Reducer,
    SupportedMemories_Reducer,
    NewMemories_Reducer,
    
});



export default RootReducer;