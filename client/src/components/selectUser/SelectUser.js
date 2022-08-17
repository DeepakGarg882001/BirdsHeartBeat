import React, { useEffect } from "react";
import "../../styles/selectUser.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion} from "framer-motion";
import { Outlet ,Link,useLocation ,useNavigate} from 'react-router-dom';
import { useSelector } from "react-redux";

const SelectUser = () => {

  const currentUser = useSelector((state) => state.CurrentUserReducer);
  const currentPath = useLocation().pathname;
  
  const navigate = useNavigate();

  useEffect(()=>{
     if(currentUser.length===0){
        navigate("*");
     }
  });
  
  return (
    <>
      <div className="select-user-canvas">
        <ToastContainer />

        <div className="select-user-top" >
          <p> Hi, {currentUser.name} </p>

          <div className="select-user-top-text">
            <p><span style={{fontWeight:"bold"}}>Note : </span> before taking any Action, Think about it?. As you are a Member of BirdsHeartBeat and all your action and reactions repersent this Organization.</p>
          </div>
        </div>

        <div className="select-user-middle">
           <div className="under-select-user-middle">
           <Link to="/member/verify/user/notVerified">
            <button style={{borderBottom:currentPath=== "/member/verify/user/notVerified" ? "4px solid #e9a703":"none" }}> Not-Verified </button>
           </Link>
           <Link to="/member/verify/user/rejected">
            <button style={{borderBottom:currentPath=== "/member/verify/user/rejected" ? "4px solid #e9a703":"none" }}> Rejected </button>
           </Link>
           </div>
          </div>
         
        <Outlet />
      </div>
    </>
  );
};

export default SelectUser;
