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
  Set_Others_Utilse_Data,

  Get_Not_Verified_Users,
  Set_Not_Verified_Users,

  Get_Members_Data,
  Set_Members_Data,

  Get_Suggestion_Data,
  Set_Suggestion_Data,

  Get_ContactUsMessages_Data,
  Set_ContactUsMessages_Data,

  Get_NotAdminUsers_Data,
  Set_NotAdminUsers_Data,

  Get_RejectedUsers_Data,
  Set_RejectedUsers_Data,

  Get_UniqueMember_Data,
  Set_UniqueMember_Data,


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



// Call API and Get All Users which are Not Verified yet !
function* getNotVerifiedUser() {

  const makeRequest = yield fetch(`${url}/join/pending/users`, {
    method: "GET",
    headers: {
      Accept:"application/json",
    "Content-Type": "application/json",
  },
  credentials:"include",
  });

  const response = yield makeRequest.json();
  let data ;

  if(response.data){
    data = response.data;
  }
  if(response.error){
    data = response;
  }

  yield put({ type: Set_Not_Verified_Users, data: data });

}







// Call API and Get All Members Data !
function* getMemberData(action) {
   console.log("at saga");
   console.log(action.query);
  const makeRequest = yield fetch(`${url}/members/all?key=${action.query}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = yield makeRequest.json();
  const data = response.data;

  yield put({ type: Set_Members_Data, data: data });

}






// Call API and Get All Suggestions !
function* getSuggestion() {
 
 const makeRequest = yield fetch(`${url}/suggestion`, {
   method: "GET",
   headers: {
     "Content-Type": "application/json",
   },
 });
 const response = yield makeRequest.json();
 const data = response.data;
 yield put({ type: Set_Suggestion_Data, data: data });

}







// Call API and Get All ContactUs Messages !
function* getContactUsMessages() {
 
  const makeRequest = yield fetch(`${url}/suggestion`, {
    method: "GET",
    headers: {
      Accept:"application/json",
    "Content-Type": "application/json",
  },
  credentials:"include",
  });
  const response = yield makeRequest.json();
  const data = response.data;
  yield put({ type: Set_ContactUsMessages_Data, data: data });
 
 }
 
 





// Call API and Get Users Which are not Admin !
function* getNotAdminUsersData() {
 
  const makeRequest = yield fetch(`${url}/users/members/not/admin`, {
    method: "GET",
    headers: {
      Accept:"application/json",
    "Content-Type": "application/json",
  },
  credentials:"include",
  });
  const response = yield makeRequest.json();
  const data = response.data;
  yield put({ type: Set_NotAdminUsers_Data, data: data });
 
 }
 
 

 



// Call API and Get all Users Which are Rejected !
function* getRejectedUsersData() {
 
  const makeRequest = yield fetch(`${url}/users/rejected`, {
    method: "GET",
    headers: {
      Accept:"application/json",
    "Content-Type": "application/json",
  },
  credentials:"include",
  });
  const response = yield makeRequest.json();
  let data ;

  if(response.data){
    data = response.data;
  }
  if(response.error){
    data = response;
  }
  yield put({ type: Set_RejectedUsers_Data, data: data });
 
 }
 
 
   



// Call API and Get all data of a Unique Member !
function* getUniqueMember(action) {
  
  const id = action.id;
  const makeRequest = yield fetch(`${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = yield makeRequest.json();
  const data = response.data;
  yield put({ type: Set_UniqueMember_Data, data: data });
 
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

  yield takeEvery(Get_Not_Verified_Users, getNotVerifiedUser);

  yield takeEvery(Get_Members_Data, getMemberData);

  yield takeEvery(Get_Suggestion_Data, getSuggestion);

  yield takeEvery(Get_ContactUsMessages_Data, getContactUsMessages);

  yield takeEvery(Get_NotAdminUsers_Data, getNotAdminUsersData);

  yield takeEvery(Get_RejectedUsers_Data, getRejectedUsersData);

  yield takeEvery(Get_UniqueMember_Data, getUniqueMember);







  
 

}

export default Saga;
