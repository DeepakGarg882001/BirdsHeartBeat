import { combineReducers } from "redux";
import DonationGainReducer from "./reducers/donationGainReducer";
import BalanceStatusReducer from "./reducers/balanceStatusReducer";
import FoodUtiliseReducer from "./reducers/FoodUtiliseReducer";
import MaterialUtiliseReducer from "./reducers/MaterialUtiliseReducer.";
import HealthUtiliseReducer from "./reducers/HealthUtiliseReducer";
import NestUtiliseReducer from "./reducers/NestUtiliseReducer";
import OthersUtiliseReducer from "./reducers/OthersUtiliseReducer.";

const RootReducer = combineReducers({

    DonationGainReducer,
    BalanceStatusReducer,
    FoodUtiliseReducer,
    MaterialUtiliseReducer,
    HealthUtiliseReducer,
    NestUtiliseReducer,
    OthersUtiliseReducer
    
});



export default RootReducer;