import React from "react";
import "../../styles/aboutUs.css";

import { motion } from "framer-motion";

import waterPot from "../../images/water_pot.jpg";
import feedingPot from "../../images/feeding_pot.jpg";
import nest from "../../images/nest.jpg";
import awarePeople from "../../images/awarePeople.png";
const AboutUs = () => {
  return (
    <>
      <div className="aboutUs-canvas">
        <div className="aboutUs-canvas-text-sec">

          <div className="aboutus-canvas-heading">
            <p> About </p>
          </div>
          <div className="aboutus-canvas-about-heading-text">
            <p>
              BirdsHeartBeat is a <b>Non-Profit Organzation </b>.
            </p>
            <p>
              As we Humans are Developing ourSelf and the environment near by
              us. Day by day new ideas comes to many people mind's and all of
              them want to became them True, for that New Technology and New
              Concepts are implementing in our srounding.
            </p>
            <p>
              We Humans has been achived So many achivements in Science, But
              after that also we Humans are unable to Understood Nature.
            </p>
          </div>


          <div className="aboutus-canvas-heading">
            <p>What we do?</p>
          </div>

          <div className="aboutus-canvas-work-step-sec">
            <p className="aboutus-work-step-title">
              We Aware people and Understood them the importance of Birds.
            </p>
            <div className="aboutus-work-step-dis-box" style={{justifyContent:"center"}}>
              <div className="aboutus-work-step-dis-text" style={{maxWidth:"560px",gap:"10px"}}>
                <p>
                  Hi, We visit's many places like University, Schools,
                  Villages... and meet people, and tell them that How these
                  innocent Birds play an important role to balance the Natural
                  Environment.
                </p>
                <p>How they help to grow crops in fields. Birds control pests, Birds pollinate plants, Birds spread
                  seeds, Birds transform entire landscapes.
                </p>
              </div>
              <div className="about-us-canvas-illustrator">
                <img src={awarePeople} className="aware-people-img"/>
              </div>
            </div>
          </div>


          <div className="aboutus-canvas-work-step-sec">
            <p className="aboutus-work-step-title">
              We Try to reduce the problems which the birds are facing, and help
              them to live long.
            </p>
            <div className="aboutus-work-step-dis-box">
              <div className="aboutus-work-step-dis-text">
            <p>
              We request and motivate the people to do not Kill the Birds for their own interest and happyness. We Humans don't have any kind of right on birds. Only Nature have rights on them. Unconsciously many time we don't know tha How the result of action taken by us, effect the life cycle of Birds.
            </p>
            </div>
            </div>
            
            <div className="aboutus-work-step-dis-box two-img-sec" >
              <div className="aboutus-work-step-dis-text" style={{alignItems:"center"}}>
                <p style={{fontSize:"1.3rem",color:"black",fontWeight:"bold"}}> Esatblise water pots  </p>
                <img src={waterPot} className="aboutus-work-step-img"/>
              </div>
              <div className="aboutus-work-step-dis-text" style={{alignItems:"center"}}>
                <p style={{fontSize:"1.3rem",color:"black",fontWeight:"bold"}}> Esatblise feeding pots </p>
                <img src={feedingPot} className="aboutus-work-step-img"/>
              </div>
            </div>

            <div className="aboutus-work-step-dis-box two-img-sec">
              <div className="aboutus-work-step-dis-text" style={{alignItems:"center"}}>
                <p style={{fontSize:"1.3rem",color:"black",fontWeight:"bold"}}> Esatblise Nest  </p>
                <img src={nest} className="aboutus-work-step-img"/>
              </div>
              <div className="aboutus-work-step-dis-text" style={{alignItems:"center"}}>
                <p style={{fontSize:"1.3rem",color:"black",fontWeight:"bold"}}> Medical Care </p>
                <img src={feedingPot} className="aboutus-work-step-img"/>
              </div>
            </div>

          </div>

         
         
        </div>

      
      </div>
    </>
  );
};

export default AboutUs;
