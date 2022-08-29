import React, { useState,useEffect } from "react";
import "../../styles/changeLink.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const ChangeGroupLink = () => {
  const [active, setActive] = useState(false);
  const currentUser = useSelector( (state)=> state.CurrentUserReducer);
  const url = process.env.REACT_APP_SERVER_URL;
  const navigate = useNavigate();
  const removeBorder = {
    "& .MuiOutlinedInput-root": {
      "& > fieldset": {
        border: "none",
      },
    },
  };

  const initialData = {
    link: "",
  };
  const validation = yup.object().shape({
    link: yup.string().min(20).required(),
  });
 
  useEffect(()=>{
    if(currentUser.length===0){
       navigate("*");
    }
 });

  return (
    <>
      <div className="change-link-canvas">
        <div className="post-work-top-part">
          <div className="work-top-part-name-box">
            <h1 className="work-top-part-name"> Welcome </h1>
          </div>
          <div className="work-top-part-details-box">
            <h1>
              Hi, This Page is Designed to Add New WhatsApp Group Link. So that we can easily Contact New Join-Us members.
            </h1>
          </div>
        </div>
        <div>
          <Formik
            initialValues={initialData}
            validationSchema={validation}
            onSubmit={async (values, { resetForm }) => {
              setActive(!active);

              const makeRequest = await fetch(`${url}/admin/change/link`, {
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
                Swal.fire("Hurry", response.message, "success");
              } else {
                if (response.error.name) {
                  Swal.fire("Sorry !", response.error.message, "error");
                } else {
                  Swal.fire("Sorry !", response.error, "error");
                }
              }
              setActive(false);
              resetForm();
            }}
          >
            <Form className="change-link-form">
              <Field
                as={TextField}
                sx={removeBorder}
                type="text"
                name="link"
                placeholder="Enter New WhatsApp Group Link "
                multiline
                maxRows={6}
                className="change-link-form-field"
              />
              <p>
                <ErrorMessage name="link" />
              </p>
              <button
                className="change-link-form-btn"
                type="submit"
                disabled={active}
                style={{backgroundColor: active ? "grey":"blue", color: active ? "black":"white"}}
              >
                Save
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ChangeGroupLink;
