import React from 'react'
import {Routes,Route,useLocation }  from "react-router-dom";

import Home from "./home/Home";
import Donation from './donation/Donation';
import Login from './login/Login';
import Contact from './contact/Contact';
import JoinUs from './joinus/JoinUs';
import Profile from './user/Profile';
import Members from './members/Members';
import AboutUs from './about/AboutUs';
import TxnStatus from './txnStatus/TxnStatus';
import SignUp from './signup/SignUp';
import Suggestions from "./suggestion/Suggestions"  ;
import CheckPay from './Payment/CheckPay';
import PayGain from './Payment/Gain/PayGain';
import PayUtilised from './Payment/Utilised/PayUtilised';

import OthersPay from './Payment/others/OthersPay';
import FoodPay from './Payment/food/FoodPay';
import HealthPay from './Payment/health/HealthPay';
import NestPay from './Payment/nest/NestPay';
import MaterialPay from './Payment/material/MaterialPay';

import PostWorkBill from './forms/PostWorkBill';

import SelectUser from './selectUser/SelectUser';
import NotVerified from './selectUser/not_verified/NotVerified';
import RejectedUsers from './selectUser/rejected/RejectedUsers';

import ForgotPassword from "./forgotPassword/ForgotPassword";
import VerifyOTP from './forgotPassword/VerifyOTP';
import ChangePassword from './forgotPassword/ChangePassword';

import MakeAdmin from "./makeAdmin/MakeAdmin";
import PageNotFound from "./PageNotFound/PageNotFound";

import ChangeGroupLink from "./changeGroupLink/ChangeGroupLink";
import DisplayContactUsMessages from './contactUs_Messages/DisplayContactUsMessages';
import ShowAdmins from './showAdmins/ShowAdmins';

import SupportedBy from './supported/SupportedBy';

import {AnimatePresence } from "framer-motion"


const Routers = () => {
 const location = useLocation();
 
  return (
    <>
    <AnimatePresence >
     <Routes  location={location} key={location.pathname} >
       <Route path="/"        element={<Home />}     />
       <Route path="/about"   element={<AboutUs />}  />
       <Route path="/login"   element={<Login />}  />
       <Route path="/signup"   element={<SignUp />}  />
       <Route path="/contact" element={<Contact />}  />
       <Route path="/suggestions" element={<Suggestions />}  />
       <Route path="/donate"  element={<Donation />} />
       <Route path="/balance"  element={<CheckPay />} >
           <Route path="/balance/gain" element={<PayGain />}  />
           <Route path="/balance/utilise" element={<PayUtilised />}  >
                 <Route path="/balance/utilise/food" element={<FoodPay/>} />
                 <Route path="/balance/utilise/material" element={<MaterialPay/>} />
                 <Route path="/balance/utilise/health" element={<HealthPay/>} />
                 <Route path="/balance/utilise/other" element={<OthersPay/>} />
                 <Route path="/balance/utilise/nest" element={<NestPay/>} />
           </Route>
       </Route>
       <Route path="/members" element={<Members />}  />
       <Route path="/join"    element={<JoinUs />}   />
       <Route path="/profile:id" element={<Profile />}  />
       <Route path="/txnStatus:key" element={<TxnStatus />}  />
       <Route path="/member/upload/work/bill" element={<PostWorkBill />}  />
       <Route path="/member/verify/user" element={<SelectUser />}  >
          <Route path="/member/verify/user/notVerified" element={<NotVerified />} />
          <Route path="/member/verify/user/rejected" element={<RejectedUsers />} />
       </Route>

       <Route path="/user/pass/forgot" element={<ForgotPassword />}  />
       <Route path="/user/forgot/enter/otp" element={<VerifyOTP />}  />
       <Route path="/user/change/pass" element={<ChangePassword />}  />

       <Route path="/member/make/admin" element={<MakeAdmin />}  />

       <Route path="/admin/change/link" element={<ChangeGroupLink />}  />

       <Route path="/admin/client/message" element={<DisplayContactUsMessages />}  />
       <Route path="/root/show/admin" element={<ShowAdmins />}  />
       <Route path="/add/supported/new" element={<SupportedBy />}  />
       
       <Route path="*" element={<PageNotFound />} /> 

       
     </Routes>
     </AnimatePresence>
    </>
  )
}

export default Routers;