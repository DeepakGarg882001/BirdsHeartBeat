import React, { useState, useEffect } from "react";
import User from "./User";
import "../../styles/createStock.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import userAvatar from "../../images/user.png";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import GetAllAdmins from "../../redux/actions/ShowAllAdmins_Action";
import TextField from "@mui/material/TextField";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const AddItemToStock = () => {
  const currentAdmin = useSelector((state) => state.CurrentUserReducer);
  const url = process.env.REACT_APP_SERVER_URL;
  const receivers = useSelector((state) => state.ShowAllAdmins_Reducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [receiverId, setReceiverId] = useState("");
  const [showList, setShowList] = useState("none");

  const initialData = {
    totalItems: "",
    itemName: "",
    itemCategory: "",
    itemPrice: "",
    totalAmount: "",
    sender: {
      userId: currentAdmin._id,
      location: "",
      date: Date(),
    },
    receiver: {
      userId: receiverId,
      location: "",
    },
  };

  const getReceivers = () => {
    dispatch(GetAllAdmins(query));
  };
  useEffect(() => {
    if (currentAdmin.length === 0) {
      // navigate("*");
    }
  }, [query]);
  return (
    <>
      <div className="create-stock-canvas">
        <Formik initialValues={initialData}>
          <Form>
            <div className="create-stock-top">
              <div>
                <input
                  type="search"
                  placeholder="Select Receiver Admin"
                  className="create-stock-top-search-bar"
                  onChange={(e) => {
                    setQuery(e.target.value);
                    getReceivers();
                    setShowList("flex");
                  }}
                />
              </div>
              <div
                className="create-stock-top-admin-list"
                style={{ display: showList }}
              >
                {receivers.map((data, index) => {
                  return (
                    <React.Fragment key={index}>
                      <div
                        className="create-stock-list-row"
                        onClick={() => {
                          setReceiverId(data._id);
                          setShowList("none");
                        }}
                      >
                        <div className="create-stock-list-user-img">
                          <img
                            className="create-stock-list-user-img-size"
                            src={
                              data.image
                                ? `${url}/${data.image.filepath}`
                                : userAvatar
                            }
                          />
                        </div>
                        <div>
                          <p>{data.name}</p>
                        </div>
                        <div>
                          <p>{data.email}</p>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            <div className="create-stock-middle">
              <div className="create-stock-user-sec">
                <User userID={currentAdmin._id} />
              </div>
              <div className="create-stock-middle-icon">
                <HiOutlineArrowNarrowRight />
              </div>
              <div className="create-stock-user-sec">
                <User userID={receiverId} />
              </div>
            </div>

            <div>
              <div>
                <Field as={TextField} />
                <p>
                  <ErrorMessage name="itemName" />
                </p>
              </div>
              <div>
                <Field as={TextField} type="text" name="itemName" />
                <p>
                  <ErrorMessage name="itemName" />
                </p>
              </div>
              <div>
                <Field as={TextField} />
                <p>
                  <ErrorMessage name="itemName" />
                </p>
              </div>
              <div>
                <Field as={TextField} />
                <p>
                  <ErrorMessage name="itemName" />
                </p>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default AddItemToStock;
