import React,{useState} from "react";
import "../../styles/signup.css";
import loginImg from "../../images/birds_on_tree.png";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import { useNavigate ,Link} from "react-router-dom";
import Swal from "sweetalert2";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import {FaUserCircle ,FaPhoneAlt,FaLock,FaRegIdCard} from "react-icons/fa";
import {MdEmail,MdWork,MdPassword} from "react-icons/md";
import {BsBuilding} from "react-icons/bs";
import { motion} from "framer-motion";
 

const SignUp = () => {
  
  const navigate = useNavigate();

  const url = process.env.REACT_APP_SERVER_URL;

  const [active,setActive]= useState(false);

  const userData = {
    name: "",
    email: "",
    phone: "",
    occupation: "",
    occupation_Address:"",
    addhar_no:"",
    password: "",
    confirmPassword: "",
  };

  const validation = yup.object().shape({

    name: yup.string().min(3, "Incorrect").required("Please Enter Your Name"),
    email: yup.string().email("Invalid email").required("Email is required !"),
    occupation: yup.string().required("This is required"),
    occupation_Address: yup.string().min(15).required("This is required"),
    phone: yup.string().min(10).max(10).required("Phone No. required !"),
    addhar_no: yup.string().min(12).max(12).required(),
    password: yup.string().min(4).max(12).required("password is required"),
    confirmPassword: yup
      .string("Confirm your Password")
      .oneOf([yup.ref("password")], "Password does not match"),
  });

  const postData = async (values) => {
    setActive(!active);
    const makeReq = await fetch(`${url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const response = await makeReq.json();

    if (response.error) {
      Swal.fire("Sorry !", `${response.error}`, "error");
    }
    if (response.message) {
      Swal.fire("Congratulation's", `${response.message}`, "success");
      navigate("/login");
    }
    setActive(!active);
  };

  return (
    <>
    <div className="signUp-canvas">
      
         <div className="signUp-wel-sec">
            <h1> Welcome! </h1>
          </div>

      <div className="signUp-paper">
         
        <div className="signUp-canvas-image">
          <img src={loginImg} alt="some issue" className="signUp-img-size" />
         
        </div>

        <div className="signUp-form-container">

        
            <Formik
              initialValues={userData}
              validationSchema={validation}
              onSubmit={(values,{resetForm}) => {
                postData(values);
                resetForm();
              }}
            >
              <Form className="signUp-form">
                <Field
                  as={TextField}
                  variant="standard"
                  label="Name"
                  placeholder="Joe"
                  name="name"
                  type="text"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaUserCircle className="signUp-field-icon" />
                      </InputAdornment>
                    ),
                  }}
                />
                <p style={{ color: "red" }}>
                  <ErrorMessage name="name" />
                </p>

                

                <Field
                  as={TextField}
                  variant="standard"
                  label="Email"
                  placeholder="xyz@email.com"
                  name="email"
                  type="email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MdEmail className="signUp-field-icon" />
                      </InputAdornment>
                    ),
                  }}
                />
                <p style={{ color: "red" }}>
                  <ErrorMessage name="email" />
                </p>

                <Field
                  as={TextField}
                  variant="standard"
                  label="Occupation"
                  placeholder="like.. student / employ"
                  name="occupation"
                  type="text"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MdWork className="signUp-field-icon" />
                      </InputAdornment>
                    ),
                  }}
                />
                <p style={{ color: "red" }}>
                  <ErrorMessage name="occupation" />
                </p>

                <Field
                  as={TextField}
                  variant="standard"
                  label="Where ?"
                  placeholder="University / office address"
                  name="occupation_Address"
                  type="text"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BsBuilding className="signUp-field-icon" />
                      </InputAdornment>
                    ),
                  }}
                />
                <p style={{ color: "red" }}>
                  <ErrorMessage name="occupation_Address" />
                </p>

                <Field
                  as={TextField}
                  variant="standard"
                  label="Contact No."
                  placeholder="9898989898"
                  name="phone"
                  type="number"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaPhoneAlt className="signUp-field-icon" />
                      </InputAdornment>
                    ),
                  }}
                />
                <p style={{ color: "red" }}>
                  <ErrorMessage name="phone" />
                </p>

                <Field
                  as={TextField}
                  variant="standard"
                  label="Addhar No."
                  placeholder="XXXX-XXXX-XXXX"
                  name="addhar_no"
                  type="number"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaRegIdCard className="signUp-field-icon" />
                      </InputAdornment>
                    ),
                  }}
                />
                <p style={{ color: "red" }}>
                  <ErrorMessage name="addhar_no" />
                </p>
                

                

                <Field
                  as={TextField}
                  variant="standard"
                  label="Password"
                  placeholder="######"
                  name="password"
                  type="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaLock className="signUp-field-icon" />
                      </InputAdornment>
                    ),
                  }}
                />
                <p style={{ color: "red" }}>
                  <ErrorMessage name="password" />
                </p>

                <Field
                  as={TextField}
                  variant="standard"
                  label="Confirm Password"
                  placeholder="re-type password"
                  name="confirmPassword"
                  type="text"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MdPassword className="signUp-field-icon" />
                      </InputAdornment>
                    ),
                  }}
                />
                <p style={{ color: "red" }}>
                  <ErrorMessage name="confirmPassword" />
                </p>
                <button type="submit" className="signUp-btn" disabled={active}>
                  <h2> Sign Up </h2>
                </button>
              </Form>
              
            </Formik>
            <div className="signUp-form-others">
               <div className="signUp-form-new-account">
                 <Link to="/login">
                    <h2> Have an Account ? </h2>
                 </Link>
               </div>
               <div className="signUp-form-join">
                 <Link to="/join">
                    <h2> Join Us </h2>
                 </Link>
               </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </>
  );
};

export default SignUp;
