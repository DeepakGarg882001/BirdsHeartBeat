import React, { useState,useEffect } from "react";
import "../../styles/postWorkForm.css";

import { Form, Field, Formik, ErrorMessage } from "formik";
import Swal from "sweetalert2";
import * as yup from "yup";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import { FiExternalLink } from "react-icons/fi";
import { CgOrganisation } from "react-icons/cg";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { motion } from "framer-motion";


const SupportedBy = () => {

  const user = useSelector((state) => state.CurrentUserReducer);
  const url = process.env.REACT_APP_SERVER_URL;

  const userID = user._id;
  const userName = user.name;
  const navigate = useNavigate();

  const [fileObj, setFileObj] = useState("");
  const [fileArray, setFileArray] = useState("");
  const [active, setActive] = useState(false);

  const postData = {
    companyName: "",
    companyLink: "",
  };

  const Validation = yup.object().shape({
    companyName: yup.string().min(3).required(" This is required ! "),
    companyLink: yup.string().min(10).required(" This is required ! "),
  });

  const handleFile = (e) => {

    setFileObj(e.target.files);

    const files = Array.from(e.target.files);

    Promise.all(
      files.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.addEventListener("load", (ev) => {
            resolve(ev.target.result);
          });

          reader.addEventListener("error", reject);
          reader.readAsDataURL(file);
        });
      })
    ).then((images) => {
      setFileArray(images);
    });
  };

  useEffect(() => {
    if (user.length === 0) {
      navigate("*");
    }
  }, []);

  return (
    <>
      <div className="post-work-canvas">
        <div className="post-work-top-part">
          <div className="work-top-part-name-box">
            <h1 className="work-top-part-name"> Welcome, {user.name} </h1>
          </div>
          <div className="work-top-part-details-box">
            <h1>
              Hi, This Page is Designed to Add New Company Support for our
              Organization.
            </h1>
          </div>
        </div>

        <div className="post-work-form-sec">
          <Formik
            initialValues={postData}
            validationSchema={Validation}
            onSubmit={async (values, { resetForm }) => {
              setActive(!active);
              const { companyLink, companyName } = values;

              let data = new FormData();
              if (fileObj.length === 0) {
                setActive(!active);
                return Swal.fire("Sorry !", "Please Upload Image also !", "error");
              }

              for (let i = 0; i < fileObj.length; i++) {
                data.append("file", fileObj[i]);
              }
              data.append("adminId", userID);
              data.append("adminName", userName);
              data.append("companyName", companyName);
              data.append("companyLink", companyLink);

              const makeRequest = await fetch(`${url}/admin/add/new/support`, {
                method: "POST",
                body: data,
              });

              const response = await makeRequest.json();
              console.log(response);
              resetForm();

              if (response.message) {
                Swal.fire("Hurry", response.message, "success");
                navigate("/");
              } else {

                if(response.error.name){
                    Swal.fire("Sorry !", response.error.name, "error");
                }else{
                    Swal.fire("Sorry !", response.error, "error");
                }
              }
              setActive(!active);
            }}
          >
            <Form className="post-work-form">
              <Field
                className="post-work-field"
                as={TextField}
                label=" Company Name "
                type="text"
                name="companyName"
                variant="standard"
                InputLabelProps={{ style: { fontSize: 20 } }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CgOrganisation className="post-work-field-icon" />
                    </InputAdornment>
                  ),
                }}
              />
              <span className="post-form-field-error">
                <ErrorMessage name="companyName" />
              </span>

              <Field
                as={TextField}
                label="Company Link "
                type="text"
                name="companyLink"
                className="post-work-field"
                InputLabelProps={{ style: { fontSize: 20 } }}
                variant="standard"
                placeholder="Enter Company web link"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FiExternalLink className="post-work-field-icon" />
                    </InputAdornment>
                  ),
                }}
              />
              <span className="post-form-field-error">
                <ErrorMessage name="companyLink" />
              </span>
              <p
                className="post-form-field-lable"
                style={{ marginBottom: "-27px" }}
              >
                Upload Company Logo
              </p>

              <input
                className="post-work-select-field"
                type="file"
                name="files"
                onChange={(e) => handleFile(e)}
              />

              <div className="post-work-form-checkbox">
                <input
                  type="checkbox"
                  name="confirm"
                  checked={active}
                  onChange={() => setActive(!active)}
                />
                <label style={{ color: active ? "green" : "gray" }}>
                  I have Checked all the Details are Correct{" "}
                </label>
              </div>

              <button
                type="submit"
                className="post-form-btn"
                disabled={!active}
                style={{ backgroundColor: active ? "blue" : "gray" }}
              >
                Submit
              </button>
            </Form>
          </Formik>
        </div>

        <div className="post-work-img-prev-box" style={{justifyContent:"center"}}>
          {fileArray
            ? fileArray.map((url, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className="prev-img-box">
                      <img src={url} className="post-work-prev-img" />
                    </div>
                  </React.Fragment>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default SupportedBy;
