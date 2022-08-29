import React, { useState, useEffect } from "react";
import "../../styles/postWorkForm.css";

import { Form, Formik } from "formik";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { motion } from "framer-motion";

const NewMemoryAdd = () => {
  const user = useSelector((state) => state.CurrentUserReducer);
  const url = process.env.REACT_APP_SERVER_URL;

  const userId = user._id;
  const navigate = useNavigate();

  const [fileObj, setFileObj] = useState("");
  const [fileArray, setFileArray] = useState("");
  const [active, setActive] = useState(false);

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

  const uploadMemory =async()=>{
    setActive(!active);

              let data = new FormData();
              if (fileObj.length === 0) {
                setActive(!active);
                return Swal.fire("Sorry !", "Please Upload Image also !", "error");
              }

              for (let i = 0; i < fileObj.length; i++) {
                data.append("file", fileObj[i]);
              }
              data.append("userId", userId);

              const makeRequest = await fetch(`${url}/admin/add/new/memory`, {
                method: "POST",
                body: data,
              });

              const response = await makeRequest.json();
              console.log(response);

              if (response.message) {
                Swal.fire("Hurry", response.message, "success");
                navigate("/");
              } else {
                if (response.error.name) {
                  Swal.fire("Sorry !", response.error.name, "error");
                } else {
                  Swal.fire("Sorry !", response.error, "error");
                }
              }
              setActive(!active);

  }

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
            <h1 className="work-top-part-name"> Welcome </h1>
          </div>
          <div className="work-top-part-details-box">
            <h1>
              Hi, This Page is Designed to Add New Memory with people, which
              shows the growth of Organization.
            </h1>
          </div>
        </div>

        <div className="post-work-form-sec">
          
            <div className="post-work-form">
              <p
                className="post-form-field-lable"
                style={{ marginBottom: "-27px" }}
              >
                Upload Only One Pic
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
              onClick={uploadMemory}
                type="submit"
                className="post-form-btn"
                disabled={!active}
                style={{ backgroundColor: active ? "blue" : "gray" }}
              >
                Submit
              </button>
            </div>
      
        </div>

        <div
          className="post-work-img-prev-box"
          style={{ justifyContent: "center" }}
        >
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

export default NewMemoryAdd;
