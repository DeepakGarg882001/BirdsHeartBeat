import React, { useEffect } from "react";
import "../../styles/profile.css";

import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import userAvtar from "../../images/user.png";
import GetUniqueMemberData from "../../redux/actions/UniqueMemberData_Action";
import UniqueMemberWork from "../../redux/actions/UniqueMemberWork_Action";

import { useDispatch, useSelector } from "react-redux";

import { IoMailOutline, IoHomeOutline } from "react-icons/io5";
import { MdOutlineWorkOutline, MdOutlineCall } from "react-icons/md";

import instaImg from "../../images/insta.png";
import fbImg from "../../images/facebook.png";
import githubImg from "../../images/github.png";
import linkedinImg from "../../images/linkedin.png";
import youtubeImg from "../../images/youtube.png";
import whatsAppImg from "../../images/whatsApp.png";

import ActivityUser from "./ActivityUser";

const Profile = () => {
  let { id } = useParams();
  const url = process.env.REACT_APP_SERVER_URL;

  const dispatch = useDispatch();
  const data = useSelector((state) => state.UniqueMemberData_Reducer);
  
  const socialAcc = data.socialAcc ? data.socialAcc : [] ;
  useEffect(() => {
    dispatch(GetUniqueMemberData(id));
    dispatch(UniqueMemberWork(id));
  }, []);

  return (
    <>
      <div className="profile-canvas">
        <div className="profile-canvas-paper">
          <div className="profile-paper-top"></div>
          <div className="profile-paper-bottom">
            <div className="profile-paper-bottom-left">
            <div className="profile-bottom-left-img">
            <img
                className="profile-bottom-left-img-size"
                src={data.image ? `${url}/${data.image.filePath}` : userAvtar}
              />
            </div>
              <p className="profile-user-name">{data.name}</p>

              <div className="profile-bottom-left-status">
                <p>{data.status}</p>
              </div>

              <div className="profile-bottom-left-about">
                <div className="profile-about-user-field">
                  <MdOutlineWorkOutline />
                  <p>{data.occupation}</p>
                </div>

                <a href={`mailto:${data.email}`} target="_self" style={{width:"100%"}}>
                <div className="profile-about-user-field">
                   <IoMailOutline />
                  <p>{data.email}</p>
                </div>
                </a>

                <a href={`tel:${data.phone}`} target="_self" style={{width:"100%"}}>
                <div className="profile-about-user-field">
                  <MdOutlineCall />
                  <p>{data.phone}</p>
                </div>
                </a>
               
                <div className="profile-about-user-field">
                  <IoHomeOutline />
                  <p>{data.address}</p>
                </div>
                
              </div>
              <div className="profile-bottom-left-social-acc">

                {socialAcc.instagram ? (
                  <div className="profile-social-acc-id">
                    <a href={socialAcc.instagram} target="_self">
                      <img src={instaImg} />
                    </a>
                  </div>
                ) : null}

                {socialAcc.facebook ? (
                  <div className="profile-social-acc-id">
                    <a href={socialAcc.facebook} target="_self">
                      <img src={fbImg} style={{borderRadius:"5px"}} />
                    </a>
                  </div>
                ) : null}

                {socialAcc.linkedin ? (
                  <div className="profile-social-acc-id">
                    <a href={socialAcc.linkedin} target="_self">
                      <img src={linkedinImg} />
                    </a>
                  </div>
                ) : null}

                {socialAcc.github ? (
                  <div className="profile-social-acc-id">
                    <a href={socialAcc.github} target="_self">
                      <img src={githubImg} />
                    </a>
                  </div>
                ) : null}

                {socialAcc.youtube ? (
                  <div className="profile-social-acc-id">
                    <a href={socialAcc.youtube} target="_self">
                      <img src={youtubeImg} />
                    </a>
                  </div>
                ) : null}

                {socialAcc.whatsApp ? (
                  <div className="profile-social-acc-id">
                    <a href={`https://wa.me/91${socialAcc.whatsApp}`} target="_self">
                      <img src={whatsAppImg} />
                    </a>
                  </div>
                ) : null}

              </div>
            </div>
            <div className="profile-paper-bottom-right">
              
              <div className="profile-right-work-detail">
                <ActivityUser user={data}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
