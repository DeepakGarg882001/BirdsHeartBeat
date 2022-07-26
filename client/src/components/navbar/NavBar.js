import React from 'react'
import "../../styles/navBar.css";
import logo from "../../images/BHBLogo.png";
import Menu from './Menu';


const NavBar = () => {
  return (
    <>
      <div className='canvas-navbar'>
           <div className='canvs-navbar-cmp-sec'>
                 
                 <div className='under-navbar-cpm-sec' >
                     <img  className='navbar-cpm-logo' src={logo} />
                 </div>
                 <div className='under-navbar-cpm-sec'>
                    <h1 className='navbar-cpm-name'> BirdsHeartBeat </h1>
                    <h3 className='navbar-cpm-status'> Non Profit Organisation </h3>
                 </div>

           </div>
          

      </div>
      <Menu />
          
    </>
  )
}

export default NavBar;