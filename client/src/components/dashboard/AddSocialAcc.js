import React, { useState } from "react";
import "../../styles/dashboard.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextField from "@mui/material/TextField";

import * as yup from "yup";

import { useDispatch } from "react-redux";
import { GetCurrentUser } from "../../redux/actions/currentUserAction";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddSocialAcc = ({user}) => {
  const dispatch = useDispatch();
  const [active,setActive] = useState(false);
  const url = process.env.REACT_APP_SERVER_URL;

  const initialValues = {
    userId:user._id,
    accountName: "",
    accountLink: "",
  };

  const Validation = yup.object().shape({
    accountName: yup.string().required(" This is required ! "),
    accountLink: yup.string().min(10).required(" This is required ! "),
  });

  return (
    <>
      <div className="dashboard-add-social">
        <Formik
          initialValues={initialValues}
          validationSchema={Validation}
          onSubmit={async (values, { resetForm }) => {
            
            setActive(true);

            const makeRequest = await fetch(`${url}/user/dashboard/social`, {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              credentials: "include",
              body: JSON.stringify(values),
            });

            const response = await makeRequest.json();
            console.log(response);
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
            setActive(false);
            resetForm();
          }}
        >
          <Form className="add-social-acc-form">
            <div className="under-add-social-acc">
              <div>
                <Field
                  as="select"
                  name="accountName"
                  className="post-work-select-field"
                >
                  <option value=""> Select </option>
                  <option value="instagram"> Instagram </option>
                  <option value="facebook"> Facebook </option>
                  <option value="linkedin"> Linkedin </option>
                  <option value="youtube"> YouTube </option>
                  <option value="github"> GitHub </option>
                  <option value="whatsApp"> WhatsApp </option>
                </Field>
                <p>
                  <ErrorMessage name="accountName" />
                </p>
              </div>

              <div>
                <Field
                  as={TextField}
                  placeholder="Please Enter the Profile Link"
                  type="text"
                  name="accountLink"
                  variant="standard"
                  multiline
                  maxRows={3}
                  className="add-social-acc-link-field"
                />
                <p>
                  <ErrorMessage name="accountLink" />
                </p>
              </div>
            </div>
            <div>
              <button type="submit" disabled={active} className="add-social-acc-form-save" > Save </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default AddSocialAcc;
