import React, { useState } from "react";
import "../../styles/changeLink.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import Swal from "sweetalert2";

const ChangeGroupLink = () => {
  const [active, setActive] = useState(false);

  const url = process.env.REACT_APP_SERVER_URL;

  const initialData = {
    link: "",
  };
  const validation = yup.object().shape({
    link: yup.string().min(20).required(),
  });

  return (
    <>
      <div className="change-link-canvas">
        <div>
          <Formik
            initialValues={initialData}
            validationSchema={validation}
            onSubmit={async (values, { resetForm }) => {
              setActive(!active);

              const makeRequest = await fetch(`${url}`, {
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
                if (response.error.message) {
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
                type="text"
                name="link"
                placeholder="Enter New WhatsApp Group Link "
              />
              <p>
                <ErrorMessage name="link" />
              </p>
              <button
                className="change-link-form-btn"
                type="submit"
                disabled={active}
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
