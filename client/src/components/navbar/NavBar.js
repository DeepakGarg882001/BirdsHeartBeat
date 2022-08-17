import React, { useState } from "react";
import "../../styles/navBar.css";
import logo from "../../images/BHBLogo.png";
import Menu from "./Menu";
import { motion } from "framer-motion";

import { MdOutlineMenu, MdClose } from "react-icons/md";
import { useSelector } from "react-redux";
import userAvtar from "../../images/user.png";
import { Link ,useLocation} from "react-router-dom";



const NavBar = () => {
  const [activePanel, setActivePanel] = useState("none");
  const user = useSelector((state) => state.CurrentUserReducer);
  const url = process.env.REACT_APP_SERVER_URL;
  const location = useLocation().pathname;

  return (
    <>
      <div className="canvas-navbar">
        <div
          className="canvas-navbar-side-panel"
          style={{ display: activePanel }}
        >
          <div className="under-side-panel-navbar">
            <div className="side-panel-close-sec">
              <MdClose onClick={() => setActivePanel("none")} />
            </div>

            <div className="side-panel-menu">
              <Menu setActivePanel={setActivePanel} />
            </div>
          </div>
        </div>

        <div className="navbar-canvas-header">
          <div className="navbar-header-left">
            <div className="navbar-header-left-icon">
              <MdOutlineMenu onClick={() => setActivePanel("block")} />
            </div>

            <div className="canvs-navbar-cmp-sec">
              <div className="under-navbar-cpm-sec">
                <img className="navbar-cpm-logo" src={logo} />
              </div>
              <div className="under-navbar-cpm-sec">
                <h1 className="navbar-cpm-name"> BirdsHeartBeat </h1>
                <h3 className="navbar-cpm-status"> NON-PROFIT ORGANIZATION </h3>
              </div>
            </div>
          </div>

          <div className="navbar-header-right">
            {user.token ? (
              <div>
              <img src={user.image ? `${url}/user.image` : userAvtar}/></div>
            ) : (
              <div>
                { location === "/join" || location === "/login" ? (<ul className="navbar-header-right-btn-sec">
               <Link to="/login" >
                <li className="navbar-header-right-btn navbar-signup" > Login </li>
                </Link>
               <Link to="/signup">
                <li className="navbar-header-right-btn "> Sign-Up</li>
                </Link> 
              </ul>) : null}
              </div>
              
              
            )}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
