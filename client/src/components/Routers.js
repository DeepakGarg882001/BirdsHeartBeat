import React from 'react'
import {Routes,Route }  from "react-router-dom";

import Home from "./home/Home";
import Donation from './donation/Donation';
import Contact from './contact/Contact';
import JoinUs from './joinus/JoinUs';
import Profile from './user/Profile';
import Members from './members/Members';
import AboutUs from './about/AboutUs';
import TxnStatus from './txnStatus/TxnStatus';
import CheckPay from './Payment/CheckPay';
import PayGain from './Payment/Gain/PayGain';
import PayUtilised from './Payment/Utilised/PayUtilised';

import OthersPay from './Payment/others/OthersPay';
import FoodPay from './Payment/food/FoodPay';
import HealthPay from './Payment/health/HealthPay';
import NestPay from './Payment/nest/NestPay';
import MaterialPay from './Payment/material/MaterialPay';
import PostWorkBill from './forms/PostWorkBill';

const Routers = () => {
 
 
  return (
    <>
     <Routes>
       <Route path="/"        element={<Home />}     />
       <Route path="/about"   element={<AboutUs />}  />
       <Route path="/contact" element={<Contact />}  />
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

     </Routes>
    </>
  )
}

export default Routers;