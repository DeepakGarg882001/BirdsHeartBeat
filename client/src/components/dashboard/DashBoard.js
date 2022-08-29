import React,{useEffect} from "react";
import "../../styles/dashboard.css";
import { motion } from "framer-motion";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import AddSocialAcc from "./AddSocialAcc";
import ChangeImg from "./ChangeImg";
import { useSelector, useDispatch } from "react-redux";
import { GetCurrentUser } from "../../redux/actions/currentUserAction";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import instaImg from "../../images/insta.png";
import fbImg from "../../images/facebook.png";
import githubImg from "../../images/github.png";
import linkedinImg from "../../images/linkedin.png";
import youtubeImg from "../../images/youtube.png";
import whatsAppImg from "../../images/whatsApp.png";
import { ToastContainer } from "react-toastify";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import { IoCallOutline, IoHomeOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";

import { useNavigate } from "react-router-dom";

const DashBoard = () => {

  const navigate = useNavigate();
  const url = process.env.REACT_APP_SERVER_URL;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.CurrentUserReducer);
  const socialAcc = user.socialAcc ? user.socialAcc : [];

  const initialData = {
    userId:user._id,
    name: user.name,
    phone: user.phone,
    address: user.address,
    status: user.status ? user.status : null,
    occupation: user.occupation,
  };

  const validate = yup.object().shape({
    name: yup.string().min(3).required(" This is required ! "),
    phone: yup.string().min(10).max(10).required(" This is required ! "),
    address: yup.string().min(20).required(" This is required ! "),
    status: yup.string().min(30).required(" This is required ! "),
    occupation: yup.string().min(5).required(" This is required ! "),
  });

  useEffect(()=>{
    if(user.length===0){
       navigate("*");
    }
 });

  return (
    <>
      <div className="dashboard-canvas">
        <ToastContainer />
        <div className="dashboard-paper">
          <div className="dashboard-paper-top">
            <Formik
              initialValues={initialData}
              validationSchema={validate}
              onSubmit={async (values) => {
                const makeRequest = await fetch(`${url}/user/dashboard/detail`, {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  credentials: "include",
                  body: JSON.stringify(values),
                });

                const response = await makeRequest.json();

                if (response.message) {
                  toast.success(response.message, {
                    position: toast.POSITION.TOP_CENTER,
                  });
                  dispatch(GetCurrentUser(response.data));
                } else {
                  if (response.error.name) {
                    toast.error(response.error.name, {
                      position: toast.POSITION.TOP_CENTER,
                    });
                  } else {
                    toast.error(response.error, {
                      position: toast.POSITION.TOP_CENTER,
                    });
                  }
                }
              }}
            >
              <Form className="dashboard-top-form">
                <div className="dashboard-top-form-profile-sec">
                  <ChangeImg user={user} />
                  <div>
                    <div>
                      <Field
                        className="dashboard-top-user-name"
                        name="name"
                        placeholder="Your Name"
                        type="text"
                      />
                      <p>
                        <ErrorMessage name="name" />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="dashboard-top-form-field">
                  <Field
                    className="dashboard-detail-field"
                    as={TextField}
                    variant="standard"
                    label="Contact No."
                    placeholder="(+91) 9898989898"
                    name="phone"
                    type="phone"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <IoCallOutline className="signUp-field-icon" />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <p>
                    <ErrorMessage name="phone" />
                  </p>
                </div>
                <div className="dashboard-top-form-field">
                  <Field
                    className="dashboard-detail-field"
                    as={TextField}
                    variant="standard"
                    label="Occupation"
                    placeholder="Enter Your Occupation"
                    name="occupation"
                    type="text"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MdWorkOutline className="signUp-field-icon" />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <p>
                    <ErrorMessage name="occupation" />
                  </p>
                </div>
                <div className="dashboard-top-form-field">
                  <Field
                    className="dashboard-detail-field"
                    as={TextField}
                    variant="standard"
                    label="Status"
                    multiline
                    maxRows={3}
                    placeholder="Tell Something about yourself "
                    name="status"
                    type="text"
                  />
                  <p>
                    <ErrorMessage name="status" />
                  </p>
                </div>

                <div className="dashboard-top-form-field">
                  <Field
                    className="dashboard-detail-field"
                    as={TextField}
                    variant="standard"
                    label="Address"
                    placeholder="Enter your Address"
                    name="address"
                    multiline
                    maxRows={3}
                    type="text"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <IoHomeOutline className="signUp-field-icon" />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <p>
                    <ErrorMessage name="address" />
                  </p>
                </div>
                <div>
                  <button type="submit"> Save </button>
                </div>
              </Form>
            </Formik>
          </div>

          <div className="dashboard-paper-middle">
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
                  <img src={fbImg} style={{borderRadius:"5px"}}/>
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

          <div className="dashboard-paper-bottom">
            <AddSocialAcc user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
