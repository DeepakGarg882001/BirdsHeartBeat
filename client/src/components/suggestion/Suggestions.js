import React, { useEffect, useState } from "react";
import "../../styles/suggestion.css";
import userImg from "../../images/user.png";
import TextField from "@mui/material/TextField";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SuggestionData from "../../redux/actions/suggestionAction";
import { useSelector, useDispatch } from "react-redux";
import { motion} from "framer-motion";

const Suggestions = () => {
  const url = process.env.REACT_APP_SERVER_URL;
   
  const [active,setActive]= useState(false);

  const dispatch = useDispatch();

  const data = useSelector((state) => state.SuggestionReducer);
  useEffect(() => {
    dispatch(SuggestionData());
  }, []);

  
  const removeBorder = {
    "& .MuiOutlinedInput-root": {
      "& > fieldset": {
        border: "none",
      },
    },
  };

  const validation = yup.object().shape({
    suggestion: yup.string().min(10).required(),
  });

  return (
    <>
      <div className="suggestion-canvas">
        <ToastContainer />
        <div className="suggestion-canvas-top">
          <div className="suggestion-top-wel-sec">
            <h1>Welcome!</h1>
          </div>

          <div className="suggestion-top-moto">
            <h1>Hi,BirdsHeartBeat is a Growing NON-PROFIT ORGANIZATION.</h1>
            <h3> & </h3>
            <h2>We respect your Time and valuable Feedback. </h2>
          </div>

          <div className="suggestion-top-detail">
            <h2> Please suggest us Something.....</h2>
          </div>
        </div>

        <div className="suggestion-canvas-middle">
          <Formik
            initialValues={{ suggestion: "" }}
            validationSchema={validation}
            onSubmit={async (values, { resetForm }) => {
                  
                setActive(!active); 

              const makeRequest = await fetch(`${url}/suggestion`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              });

              const response = await makeRequest.json();

              console.log(response);
              if (response.message) {
                toast.success(response.message, {
                  position: toast.POSITION.TOP_CENTER,
                });
                dispatch(SuggestionData());
              } else {
                toast.error(response.error, {
                  position: toast.POSITION.TOP_CENTER,
                });
              }
              setActive(!active); 
              resetForm();
            }}
          >
            <Form className="sussestion-middle-form">
              <Field
                className="suggestion-middle-filed"
                as={TextField}
                type="text"
                sx={removeBorder}
                multiline
                maxRows={6}
                name="suggestion"
                placeholder="Enter the Suggestion ..........."
              />
              <ErrorMessage name="suggestion" />
              <button type="submit" className="suggestion-btn" disabled={active}>
                Submit
              </button>
            </Form>
          </Formik>
        </div>

        <div className="suggestion-canvas-bottom">
          {data.length!=0 ? (
            data.map((data, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="suggestion-card">
                    <div className="under-suggestion-card">
                      <div className="suggestion-card-user-sec">
                        <img
                          className="suggestion-card-user-img"
                          src={userImg}
                        />
                        <div className="suggestion-card-date">
                          <p style={{ fontSize: "1.1rem" }}>{new Date(data.createdAt).toDateString()}</p>
                        </div>
                      </div>
                      <div className="suggestion-card-message-box">
                        <p className="suggestion-card-message">
                          {data.suggestion}
                        </p>
                      </div>
                    </div>
                    <div className="suggestion-card-time">
                      <p>{new Date(data.createdAt).toLocaleTimeString('en-US', {hour12: true })}</p>
                      
                    </div>
                  </div>
                </React.Fragment>
              );
            })
          ) : (
            <div className="sussestion-bottom-not-yet">
              <h1> No Suggestion yet</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Suggestions;
