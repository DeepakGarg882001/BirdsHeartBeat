import React, { useState } from "react";
import "../../styles/joinUs.css";

import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { MdWork, MdEmail } from "react-icons/md";
import { FaUserCircle, FaHome } from "react-icons/fa";

import Swal from "sweetalert2";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import joinUsImg from "../../images/joinUs.png";
import { motion } from "framer-motion";

const JoinUs = () => {
  const url = process.env.REACT_APP_SERVER_URL;

  const [active, setActive] = useState(false);

  const dataFields = {
    name: "",
    age: "",
    occupation: "",
    address: "",
    email: "",
    message: "",
  };

  const validation = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required !"),
    name: yup.string().min(3, "Invalid").required(" This is required"),
    age: yup
      .string()
      .min(2, "Not Eligible")
      .max(2, "Not Eligible")
      .required(" This is required"),
    occupation: yup.string().min(4).required(" This is required"),
    address: yup.string().min(15).required(" This is required"),
    message: yup.string().min(40).required(" This is required"),
  });

  const removeBorder = {
    "& .MuiOutlinedInput-root": {
      "& > fieldset": {
        border: "none",
      },
    },
  };

  return (
    <>
      <div className="join-canvas">
        <ToastContainer />
        <div className="join-canvas-top-part">
          <div className="join-top-welcome-box">
            <h1> Hi, BirdsHeartBeat Welcome's You </h1>
            <div className="join-canvas-npo">
              <p className="npo-text"> A </p>
              <p className="npo-text"> NON - PROFIT </p>
              <p className="npo-text"> ORGANISATION </p>
            </div>
          </div>
        </div>

        <div className="join-canvas-middle-part">
          <div className="join-message-box">
            <p className="join-top-text-1">Want to be a Member?, then</p>
          </div>

          <div className="join-middle-part-bottom">

         
          <div className="join-canvas-middle-left">
            <div className="join-canvas-img-sec">
              <img src={joinUsImg} />
            </div>
          </div>
          <Formik
            initialValues={dataFields}
            validationSchema={validation}
            onSubmit={async (values, { resetForm }) => {
              setActive(!active);

              const makeRequest = await fetch(`${url}/joinus`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              }).then(
                toast.info(
                  `Hi, ${values.name}. Please wait. It make take time upto 1-mint`,
                  {
                    position: toast.POSITION.TOP_CENTER,
                  }
                )
              );

              const response = await makeRequest.json();
              console.log(response);

              if (response.message) {
                Swal.fire("Hurry !", response.message, "success");
              } else {
                if (response.error.message) {
                  Swal.fire("Sorry !", response.error.message, "error");
                } else {
                  Swal.fire("Sorry !", response.error, "error");
                }
              }

              resetForm();
              setActive(!active);
            }}
          >
            <Form className="join-canvas-form-sec">
              <div>
                <Field
                  className="join-form-field"
                  variant="standard"
                  as={TextField}
                  label=" Your Name "
                  placeholder="Joe"
                  name="name"
                  type="text"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaUserCircle className="field-icon" />
                      </InputAdornment>
                    ),
                  }}
                />
                <p>
                  <ErrorMessage name="name" />
                </p>
              </div>

              <div>
                <Field
                  className="join-form-field"
                  variant="standard"
                  as={TextField}
                  label=" Age "
                  placeholder="21"
                  name="age"
                  type="number"
                />
                <p className="join-form-error">
                  <ErrorMessage name="age" />
                </p>
              </div>

              <div>
                <Field
                  className="join-form-field"
                  variant="standard"
                  as={TextField}
                  label=" Occupation "
                  name="occupation"
                  placeholder="student / Employ"
                  type="text"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MdWork className="field-icon" />
                      </InputAdornment>
                    ),
                  }}
                />
                <p className="join-form-error">
                  <ErrorMessage name="occupation" />
                </p>
              </div>

              <div>
                <Field
                  className="join-form-field"
                  variant="standard"
                  as={TextField}
                  label=" Email "
                  placeholder="xyz@email.com"
                  name="email"
                  type="email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MdEmail className="field-icon" />
                      </InputAdornment>
                    ),
                  }}
                />
                <p className="join-form-error">
                  <ErrorMessage name="email" />
                </p>
              </div>

              <div>
                <Field
                  className="join-form-field"
                  variant="standard"
                  as={TextField}
                  label=" Address "
                  placeholder="CUH,pali,mahendergarh,haryana"
                  name="address"
                  type="text"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaHome className="field-icon" />
                      </InputAdornment>
                    ),
                  }}
                />
                <p className="join-form-error">
                  <ErrorMessage name="address" />
                </p>
              </div>

              <div style={{ marginTop: "20px" }}>
                <Field
                  className="join-form-field"
                  variant="standard"
                  as={TextField}
                  placeholder=" Why do you want to Join ? "
                  sx={removeBorder}
                  multiline
                  type="text"
                  maxRows={6}
                  name="message"
                />
                <p className="join-form-error">
                  <ErrorMessage name="message" />
                </p>
              </div>

              <div className="join-form-checkbox">
                <input
                  type="checkbox"
                  name="confirm"
                  checked={active}
                  onChange={() => setActive(!active)}
                />
                <label style={{ color: active ? "#207138" : "gray" }}>
                  I have Checked all the Details are Correct
                </label>
              </div>

              <button
                type="submit"
                className="join-form-btn"
                disabled={!active}
                style={{
                  backgroundColor: active ? "#207138" : "#fdf2d8",
                  color: active ? "white" : "#583804",
                }}
              >
                Submit
              </button>
            </Form>
          </Formik>
          </div>
        </div>

        <div className="join-canvas-bottom-part">
          <p className="join-bottom-text-box">
            <span className="join-bottom-note">NOTE : </span>
            <span>
              After FillUp this form you will recieve a Meeting Link with in 24
              hr. This Meeting will be very Short and natural. So, be releax.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
