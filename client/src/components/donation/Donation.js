import React from "react";
import { post } from "./Paytm";
import { BiRupee } from "react-icons/bi";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../../styles/donation.css";
import InputAdornment from "@mui/material/InputAdornment";
import { TextField } from "@mui/material";
import * as yup from "yup";
import { motion } from "framer-motion";

import boyFeedingImg from "../../images/boyFeeding.png";
import birdFeedingImg from "../../images/birdFeeding.png";

const Donation = () => {
  const url = process.env.REACT_APP_SERVER_URL;

  const amount = {
    amount: "",
  };

  const getChecksum = async (amount) => {
    try {
      console.log(amount);
      const response = await fetch(`${url}/donate`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: amount }),
      });

      const data = await response.json();

      let information = {
        action: "https://securegw-stage.paytm.in/order/process",
        params: data,
      };

      post(information);
    } catch (error) {
      console.log(error);
    }
  };

  const payWithPaytm = async (values) => {
    let decimal = Number(values.amount).toFixed(2);

    getChecksum(decimal);
  };

  const validation = yup.object().shape({
    amount: yup.number().min(1).required(" Please Enter some Amount !"),
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
      <div className="donation-canvas">

        <div className="donation-canvas-top">

        </div>

        <div className="donation-canvas-bottom">

          <div className="donation-bottom-left"> 
           <img src={boyFeedingImg} className="donation-canvas-img"/>
          </div>

          <div className="donation-bottom-middle">
            <Formik
              initialValues={amount}
              validationSchema={validation}
              onSubmit={(values, { resetForm }) => {
                payWithPaytm(values);
                resetForm();
              }}
            >
              <Form className="donation-form">
                <Field
                  as={TextField}
                  type="number"
                  className="donation-amount-input"
                  name="amount"
                  placeholder="0"
                  sx={[
                    removeBorder,
                    { input: { color: "green", fontSize: "2rem" } },
                  ]}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BiRupee className="donation-page-icon" />
                      </InputAdornment>
                    ),
                  }}
                />
                <p>
                  <ErrorMessage name="amount" />
                </p>
                <div className="donation-btn-box">
                  <button type="submit"> Proceed </button>
                </div>
              </Form>
            </Formik>
          </div>

         
        </div>
      </div>
    </>
  );
};

export default Donation;
