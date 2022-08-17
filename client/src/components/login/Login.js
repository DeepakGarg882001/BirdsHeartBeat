import React, { useState } from "react";
import "../../styles/login.css";
import loginImg from "../../images/birdTree.png";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

import Cookies from "universal-cookie";
import Swal from "sweetalert2";

import { MdEmail } from "react-icons/md";
import { BsFillShieldLockFill } from "react-icons/bs";

import { useNavigate ,Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import {GetCurrentUser} from "../../redux/actions/currentUserAction";
import { motion} from "framer-motion";




const Login = () => {
  
  const url = process.env.REACT_APP_SERVER_URL;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cookie = new Cookies();
 
  const [active, setActive] = useState(false);

  const userloginData = {
    email: "",
    password: "",
  };

  const validation = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required !"),
    password: yup.string().required("password is required"),
  });

  const verifyUser = async (values) => {
    const { email, password } = values;

    const makeRequest = await fetch(`${url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,password,
      }),
    });

    const response = await makeRequest.json();
    console.log(response);
    if (response.error) {
      Swal.fire("Sorry", `${response.error}`, "error");
    }
    if (response.message) {
      Swal.fire(
        "Welcome Back ",
        `${response.data.name}`,
        "success"
      );
      cookie.set("BHB_token", `${response.data.token}`);
      dispatch(GetCurrentUser(response.data));
      navigate("/");
    }
    
    setActive(!active);
  };

  return (
    <>
      <div className="login-canvas">
        <div className="login-paper">
           
          <div className="login-canvas-image">
            <img src={loginImg} alt="some issue" className="login-img-size" />
          </div>

          <div className="login-form-container">

            <div className="login-wel-sec">
              <h1> Welcome! </h1>
            </div>

            <Formik
              initialValues={userloginData}
              validationSchema={validation}
              onSubmit={(values,{resetForm}) => {
                setActive(!active);
                verifyUser(values);
                resetForm();
              }}
            >
              <Form className="form">
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
                        <MdEmail className="field-icon" />
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
                  label="Password"
                  placeholder="######"
                  name="password"
                  type="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BsFillShieldLockFill className="field-icon" />
                      </InputAdornment>
                    ),
                  }}
                />
                <p style={{ color: "red" }}>
                  <ErrorMessage name="password" />
                </p>

                <div>
                 <Link to="/user/pass/forgot"> <p style={{fontSize:"1rem",color:"red"}}>Forgot Password?</p></Link>
                </div>

                <button type="submit" className="login-btn" disabled={active}>
                  <h2>Login</h2>
                </button>
              </Form>
            </Formik>

            <div className="login-form-others">
               <div className="login-form-new-account">
                 <Link to="/join">
                    <h2> Create account </h2>
                 </Link>
               </div>
               <div className="login-form-join">
                 <Link to="/join">
                    <h2> Join Us</h2>
                 </Link>
               </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Login;
