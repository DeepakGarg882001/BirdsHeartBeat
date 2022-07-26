import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";
import Saga from "./saga";
import createSagaMiddleware  from "redux-saga"

const sagaMiddleware = createSagaMiddleware();
console.log("store is runing");
const Store = configureStore(
    {
       reducer:RootReducer,
       middleware:()=>[sagaMiddleware]
    }
);

sagaMiddleware.run(Saga);

export default Store;