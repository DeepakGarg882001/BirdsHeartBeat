import React, { useState } from "react";
import "../../styles/checkPay.css";

import BalanceStatus from "./BalanceStatus";
import { Link, Outlet ,useLocation } from "react-router-dom";



const CheckPay = () => {
  
  
  
  const currentPath = useLocation().pathname;
  
  
  
  return (
    <>
      <div className="check-pay-canvas">

        <div className="check-pay-upper-part">
          <BalanceStatus />
        </div>

        <div className="check-pay-middle-part">

          <div>
            <h1>Check all the payments here </h1>
          </div>
           
           <div className="check-pay-tab-sec">
           <Link to="/balance/gain" > <button className="check-pay-tab-name" style={{borderBottom:currentPath=== "/balance/gain" ? "4px solid #e9a703":"none" }} > Gain</button></Link>
           <Link to="/balance/utilise/food" > <button className="check-pay-tab-name" style={{borderBottom:currentPath.match("/balance/utilise") ? "4px solid #e9a703":"none" }} > Utilised</button></Link>
           </div>

        </div>
         
         <Outlet />

         

      </div>
    </>
  );
};

export default CheckPay;
