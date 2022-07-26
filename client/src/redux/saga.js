import { takeEvery, put } from "redux-saga/effects";
import {
   
  Donation_Gain_Data,
  Set_Donation_Gain_Data,

  Get_Balance_Status,
  Set_Balance_Status,

  Get_Food_Utilse_Data,
  Get_Material_Utilse_Data,
  Get_Health_Utilse_Data,
  Get_Nest_Utilse_Data,
  Get_Others_Utilse_Data,

  Set_Food_Utilse_Data,
  Set_Material_Utilse_Data,
  Set_Health_Utilse_Data,
  Set_Nest_Utilse_Data,
  Set_Others_Utilse_Data

} from "./reduxConstants";

const url = process.env.REACT_APP_SERVER_URL;







// Call API and Get List of all transaction for DonationGain List
function* getDonationGain() {
  
  const makeRequest = yield fetch(`${url}/donation/gain/list`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = yield makeRequest.json();
  const data = response.data;

  yield put({ type: Set_Donation_Gain_Data, data: data });

}






// Call API and Get Balance Status
function* getBalanceStatus() {

  const makeRequest = yield fetch(`${url}/balance/status`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = yield makeRequest.json();
  const data = response.data;

  yield put({ type: Set_Balance_Status, data: data });

}




// Call API and Get Food Utilise Data
function* getFoodUtiliseData() {

  const makeRequest = yield fetch(`${url}/donation/utilise/list?type=food`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = yield makeRequest.json();
  const data = response.data;

  yield put({ type: Set_Food_Utilse_Data, data: data });

}





// Call API and Get Material Utilise Data
function* getMaterialUtiliseData() {

  const makeRequest = yield fetch(`${url}/donation/utilise/list?type=material`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = yield makeRequest.json();
  const data = response.data;

  yield put({ type: Set_Material_Utilse_Data, data: data });

}





// Call API and Get Health Utilise Data
function* getHealthUtiliseData() {

  const makeRequest = yield fetch(`${url}/donation/utilise/list?type=health`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = yield makeRequest.json();
  const data = response.data;

  yield put({ type: Set_Health_Utilse_Data, data: data });

}





// Call API and Get Nest Utilise Data
function* getNestUtiliseData() {

  const makeRequest = yield fetch(`${url}/donation/utilise/list?type=nest`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = yield makeRequest.json();
  const data = response.data;

  yield put({ type: Set_Nest_Utilse_Data, data: data });

}





// Call API and Get Others Utilise Data
function* getOthersUtiliseData() {

  const makeRequest = yield fetch(`${url}/donation/utilise/list?type=others`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = yield makeRequest.json();
  const data = response.data;

  yield put({ type: Set_Others_Utilse_Data, data: data });

}






// Main Function Starts from here.
function* Saga() {

  yield takeEvery(Donation_Gain_Data, getDonationGain);

  yield takeEvery(Get_Balance_Status, getBalanceStatus);

  yield takeEvery(Get_Food_Utilse_Data, getFoodUtiliseData);

  yield takeEvery(Get_Material_Utilse_Data, getMaterialUtiliseData);

  yield takeEvery(Get_Health_Utilse_Data, getHealthUtiliseData);

  yield takeEvery(Get_Nest_Utilse_Data, getNestUtiliseData);

  yield takeEvery(Get_Others_Utilse_Data, getOthersUtiliseData);
 

}

export default Saga;
