import React from 'react';
import "../../styles/pageNotFound.css";
import Page404 from "../../images/404.png";
import "../../styles/pageNotFound.css";
import { motion} from "framer-motion";

const PageNotFound = () => {
  return (
   <>
     <div className='canvas-404'>
        <div className='canvas-404-img'>
           <img src={Page404} alt="some issue" className='canvas-404-img-size'/>
         </div>
     </div>
   </>
  )
}

export default PageNotFound;