import React from 'react'
import "../../styles/menu.css";
import {Link} from "react-router-dom";


const Menu = () => {
  return (
    <>
      <div className='menu-canvas'>
          <ul className='menu-list-desk'>
            <Link to="/"> <li className='menu-list-option'> Home </li></Link>
            <Link to="/donate"> <li className='menu-list-option'> Donate </li></Link>
            <Link to="/members"> <li className='menu-list-option'> Members </li></Link>
            <Link to="/balance/gain"> <li className='menu-list-option'> Balance </li></Link>
            <Link to="/join"> <li className='menu-list-option'> Join US </li></Link>
            <Link to="/about"> <li className='menu-list-option'> About </li></Link>
            <Link to="/contact"> <li className='menu-list-option'> Contact </li></Link>
            <Link to="/login"> <li className='menu-list-option'> Login </li></Link>
          </ul>
      </div>
    </>
  )
}

export default Menu;