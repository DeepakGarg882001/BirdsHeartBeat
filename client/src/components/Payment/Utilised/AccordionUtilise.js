import React, { useState } from "react";
import "../../../styles/accordion.css";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import {IoClose} from "react-icons/io5";
import {SiGooglemaps} from "react-icons/si";
import { motion} from "framer-motion";


const AccordionUtilise = ({ data }) => {
  const [isActive, setIsActive] = useState(false);
  const url =process.env.REACT_APP_SERVER_URL;


  const [showDisplay,setShowDisplay]= useState("none");
  const [path,setPath]=useState("");
  
  const imgClicked =(imgPath)=>{
    setPath(imgPath);
    if(showDisplay==="none"){
      setShowDisplay("flex");
    }else{
      setShowDisplay("none");
    }

  }

  return (
    <>
      <div>
        {isActive && (
          <div className="accordion-content-box">
            
           <a href={`https://www.google.com/maps/search/?api=1&query=${data.location_latitude}%2C${data.location_longitude}`} >
            <div className="accordian-location-box" >
              <SiGooglemaps style={{fontSize:"2rem"}} />
              <h2>Location</h2>
            </div>
            </a> 
            {data.images ? data.images.map((data, index) => {
              return (
                <React.Fragment key={index}>
                  <div style={{width:"auto",height:"100px"}} >
                    <img src={`${url}/${data.filePath}`}  style={{width:"100%",height:"100%"}} onClick={()=>imgClicked(data.filePath)}/>
                  </div>
                </React.Fragment>
              );
            })
             : <></>
            }

            
          </div>
        )}
      </div>

      <div
        onClick={() => setIsActive(!isActive)}
        className="accordion-icon-section"
      >
        {isActive ? (
          <IoIosArrowUp className="accordion-icon" />
        ) : (
          <IoIosArrowDown className="accordion-icon" />
        )}
      </div>

      
      <div className="accordian-image-model" style={{display:showDisplay}} >
           <div onClick={()=>imgClicked("") } className="image-model-btn">
              <p> Close  </p><IoClose />
           </div> 

           <img src={`${url}/${path}`} className="accordion-model-img-size" />
      </div>

    </>
  );
};

export default AccordionUtilise;
