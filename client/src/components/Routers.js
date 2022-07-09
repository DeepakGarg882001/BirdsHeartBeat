import React from 'react'
import {Routes,Route}  from "react-router-dom";

import Home from "./home/Home";
import Donation from './donation/Donation';
import Contact from './contact/Contact';
import JoinUs from './joinus/JoinUs';
import Profile from './user/Profile';
import Members from './members/Members';
import AboutUs from './about/AboutUs';

const Routers = () => {
  return (
    <>
     <Routes>
       <Route path="/"        element={<Home />}     />
       <Route path="/about"   element={<AboutUs />}  />
       <Route path="/contact" element={<Contact />}  />
       <Route path="/donate"  element={<Donation />} />
       <Route path="/members" element={<Members />}  />
       <Route path="/join"    element={<JoinUs />}   />
       <Route path="/profile" element={<Profile />}  />

     </Routes>
    </>
  )
}

export default Routers;