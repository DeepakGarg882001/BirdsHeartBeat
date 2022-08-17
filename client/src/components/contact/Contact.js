import React from "react";
import "../../styles/contact.css";

import Swal from "sweetalert2";
import { TextField } from "@mui/material";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import contactImg from "../../images/contact.png";
import insta from "../../images/insta.png";
import linkedin from "../../images/linkedin.png";
import mail from "../../images/email.png";
import facebook from "../../images/facebook.png";

import { SiGooglemaps } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { useNavigate } from "react-router-dom";

import {
  INSTA_ACC,
  FB_ACC,
  LINKEDIN_ACC,
  CUH_LOC,
  Mob_NO,
  email_id,
} from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  const url = process.env.REACT_APP_SERVER_URL;
  const navigate = useNavigate();

  const contactMessage = {
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    clientMessage: "",
  };

  const validation = yup.object().shape({
    clientMessage: yup.string().required(" Message is required !"),
    clientName: yup
      .string()
      .min(3, " Incorrect")
      .required(" Name is required !"),
    clientEmail: yup
      .string()
      .email(" Invalid email")
      .required(" Email is required !"),
    clientPhone: yup.string().min(9).max(10).required(" Phone No. required !"),
  });

  const removeBorder = {
    "& .MuiOutlinedInput-root": {
      "& > fieldset": {
        border: "none",
      },
    },
  };

  const handelMessage = async (values) => {
    const makeReq = await fetch(`${url}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const response = await makeReq.json();
    if (response.message) {
      Swal.fire("Hurry 🥳🥳", response.message, "success");
      navigate("/");
    } else {
      if (response.error.name) {
        Swal.fire("Sorry !", response.error.name, "error");
      } else {
        Swal.fire("Sorry !", response.error, "error");
      }
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, animationDuration: 2 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transitionDuration: 2 }}
        className="contact-canvas"
      >
        <div className="contact-canvas-top">
          <div className="contact-top-page-name">
            <h1> Contact US </h1>
          </div>

          <div className="contact-top-second-box">
            <div className="contact-top-img-sec">
              <img src={contactImg} className="contact-top-img" />
            </div>

            <div className="contact-top-text-box">
              <h1 className="contact-top-heading">
                Any query or remarks? Just write a Message!
              </h1>
              <p>Hi, Our Team is available for you.</p>
              <h1 className="contact-top-heading-touch">Get in Touch </h1>
              <p>
                Get Easily & Comfortably Touch with our Organization at
                different Platforms
              </p>

              <div className="contact-top-icons">
                <a href={INSTA_ACC} target="_self">
                  <img src={insta} className="contact-top-icons-size" />
                </a>
                <a href={LINKEDIN_ACC} target="_self">
                  <img src={linkedin} className="contact-top-icons-size" />
                </a>
                <a href={`mailto:${email_id}`} target="_self">
                  <img src={mail} className="contact-top-icons-size" />
                </a>
                <a href={FB_ACC} target="_self">
                  <img src={facebook} className="contact-top-icons-size" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-canvas-middle">
          <div className="contact-middle-info-box">
            <FaPhoneAlt className="contact-middle-icon-style" />
            <a href={`tel:${Mob_NO}`} target="_self">
              <div>
                <h2 className="contact-middle-title-style"> Phone </h2>
                <p> (+91) {Mob_NO} </p>
              </div>
            </a>
          </div>

          <div className="contact-middle-info-box">
            <MdEmail className="contact-middle-icon-style" />
            <a href={`mailto:${email_id}`} target="_self">
              <div>
                <h2 className="contact-middle-title-style"> Email </h2>
                <p> {email_id} </p>
              </div>
            </a>
          </div>

          <div className="contact-middle-info-box">
            <SiGooglemaps className="contact-middle-icon-style" />
            <a href={CUH_LOC} target="_self">
              <div>
                <h2 className="contact-middle-title-style"> Address </h2>
                <p> Central University of Haryana </p>
              </div>
            </a>
          </div>

          <Formik
            initialValues={contactMessage}
            validationSchema={validation}
            onSubmit={(values, { resetForm }) => {
              handelMessage(values);
              resetForm();
            }}
          >
            <Form className="contact-middle-message-box">
              <h2
                className="contact-middle-title-style"
                style={{ marginLeft: "30px" }}
              >
                Get in Touch
              </h2>

              <div className="contact-middle-inside-message-box">
                <div className="contact-form-fields-box">
                  <Field
                    as={TextField}
                    placeholder="Your Name"
                    className="contact-middle-input-feild"
                    sx={removeBorder}
                    name="clientName"
                    type="text"
                  />
                  <p>
                    <ErrorMessage name="clientName" />
                  </p>
                </div>

                <div className="contact-form-fields-box">
                  <Field
                    as={TextField}
                    placeholder="Your Email"
                    className="contact-middle-input-feild"
                    sx={removeBorder}
                    name="clientEmail"
                    type="email"
                  />
                  <p>
                    <ErrorMessage name="clientEmail" />
                  </p>
                </div>

                <div className="contact-form-fields-box">
                  <Field
                    as={TextField}
                    placeholder="Contact Number"
                    className="contact-middle-input-feild"
                    sx={removeBorder}
                    name="clientPhone"
                    type="number"
                  />
                  <p>
                    <ErrorMessage name="clientPhone" />
                  </p>
                </div>

                <div className="contact-middle-box">
                  <Field
                    as={TextField}
                    placeholder="Enter Your Message"
                    className="contact-middle-message-feild"
                    sx={removeBorder}
                    multiline
                    maxRows={6}
                    name="clientMessage"
                    type="text"
                  />
                  <p>
                    <ErrorMessage name="clientMessage" />
                  </p>
                </div>
              </div>
              <button className="contact-middle-title-style" type="submit">
                Submit
              </button>
            </Form>
          </Formik>
        </div>

        <div className="contact-canvas-bottom">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1043.9013779637687!2d76.14677838805325!3d28.351238803668664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912953c48d9d709%3A0x73541db15acd949c!2sWi-Fi%20Park!5e0!3m2!1sen!2sin!4v1659155070322!5m2!1sen!2sin"
            style={{ border: 0, width: "100%", height: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
