import React, { useState } from "react";
import "../../styles/postWorkForm.css";

import { Form, Field, Formik, ErrorMessage } from "formik";
import Swal from "sweetalert2";
import * as yup from "yup";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import { BiRupee } from "react-icons/bi";
import { TbWorldLongitude, TbWorldLatitude } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const PostWorkBill = () => {
  const user = useSelector((state) => state.CurrentUserReducer);
  const url = process.env.REACT_APP_SERVER_URL;

  const userID = user._id;
  const userName = user.name;
  const navigate = useNavigate();

  const [fileObj, setFileObj] = useState("");
  const [fileArray, setFileArray] = useState("");
  const [active, setActive] = useState(false);

  const postData = {
    type: "",
    amount: "",
    location_latitude: "",
    location_longitude: "",
  };

  const Validation = yup.object().shape({
    type: yup.string().required(" This is required ! "),
    amount: yup.number().required(" This is required ! "),
    location_latitude: yup.number().required(" This is required ! "),
    location_longitude: yup.number().required(" This is required ! "),
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

  return (
    <>
      <div className="post-work-canvas">
        <div className="post-work-top-part">
          <div className="work-top-part-name-box">
            <h1 className="work-top-part-name"> Welcome, {user.name} </h1>
          </div>
          <div className="work-top-part-details-box">
            <h1>
              {" "}
              Hi, This Page is Designed to Upload all the Details related to
              Your work as a Member of BirdsHeartBeat and How Did You utilise
              The Donation Money !
            </h1>
          </div>
        </div>

        <div className="post-work-form-sec">
          <Formik
            initialValues={postData}
            validationSchema={Validation}
            onSubmit={async (values, { resetForm }) => {
              setActive(!active);
              const { amount, type, location_latitude, location_longitude } =
                values;

              let data = new FormData();
              if (fileObj.length === 0) {
                setActive(!active);
                return swal("Sorry !", "Please Upload Image also !", "error");
              }

              for (let i = 0; i < fileObj.length; i++) {
                data.append("file", fileObj[i]);
              }
              data.append("userId", userID);
              data.append("userName", userName);
              data.append("amount", amount);
              data.append("type", type);
              data.append("location_latitude", location_latitude);
              data.append("location_longitude", location_longitude);

              const makeRequest = await fetch(`${url}/api/post/v/work/bill`, {
                method: "POST",
                body: data,
              });

              const response = await makeRequest.json();

              resetForm();

              if (response.message) {
                Swal.fire("Hurry", response.message, "success");
                navigate("/balance/utilise/food");
              } else {
                if (response.error.message) {
                  Swal.fire("Sorry !", response.error.message, "error");
                } else {
                  Swal.fire("Sorry !", response.error, "error");
                }
              }
              setActive(!active);
            }}
          >
            <Form className="post-work-form">
              <div>
                <p className="post-form-field-lable">Your work related to : </p>
                <Field
                  as="select"
                  name="type"
                  className="post-work-select-field"
                >
                  <option value=""> Select </option>
                  <option value="food"> Food </option>
                  <option value="material"> Material </option>
                  <option value="health"> Health </option>
                  <option value="nest"> Nest </option>
                  <option value="others"> Others </option>
                </Field>
              </div>
              <span className="post-form-field-error">
                <ErrorMessage name="type" />
              </span>

              <Field
                className="post-work-field"
                as={TextField}
                label=" Amount "
                type="number"
                name="amount"
                variant="standard"
                InputLabelProps={{ style: { fontSize: 20 } }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BiRupee className="post-work-field-icon" />
                    </InputAdornment>
                  ),
                }}
              />
              <span className="post-form-field-error">
                <ErrorMessage name="amount" />
              </span>

              <p
                className="post-form-field-lable"
                style={{ marginBottom: "-27px" }}
              >
                Enter Co-ordinates of Location{" "}
              </p>

              <Field
                as={TextField}
                label=" Latitute "
                type="number"
                name="location_latitude"
                className="post-work-field"
                InputLabelProps={{ style: { fontSize: 20 } }}
                variant="standard"
                placeholder="423.43514514"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <TbWorldLatitude className="post-work-field-icon" />
                    </InputAdornment>
                  ),
                }}
              />
              <span className="post-form-field-error">
                <ErrorMessage name="location_latitude" />
              </span>

              <Field
                className="post-work-field"
                as={TextField}
                label=" Longitude "
                type="number"
                name="location_longitude"
                InputLabelProps={{ style: { fontSize: 20 } }}
                placeholder="-82.440994923"
                variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <TbWorldLongitude className="post-work-field-icon" />
                    </InputAdornment>
                  ),
                }}
              />
              <span className="post-form-field-error">
                <ErrorMessage name="location_longitude" />
              </span>

              <input
                className="post-work-select-field"
                type="file"
                multiple
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

        <div className="post-work-img-prev-box">
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

export default PostWorkBill;
