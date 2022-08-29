import React, { useEffect } from "react";
import "../../styles/contactMessage.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import Get_ContactUsMessages from "../../redux/actions/ContactUsMessages_Action";

import { GrUserManager, GrMailOption } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";

const DisplayContactUsMessages = () => {
  const currentAdmin = useSelector((state) => state.CurrentUserReducer);
  const data = useSelector((state) => state.ContactUsMessages_Reducer);
  const url = process.env.REACT_APP_SERVER_URL;
  let userRole = currentAdmin ? currentAdmin.userRole : [];
  console.log(userRole)
  const dispatch = useDispatch();

  const updateMessage = async (value) => {
    const postData = {
      userId: currentAdmin._id,
      progress: value.progress,
      messageId: value.messageId,
    };

    const makeRequest = await fetch(`${url}/contact/status`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(postData),
    });

    const response = await makeRequest.json();

    if (response.message) {
      toast.success(response.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      dispatch(Get_ContactUsMessages());
    } else {
      if (response.error.name) {
        toast.error(response.error.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.error(response.error, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
  };

  useEffect(() => {
    dispatch(Get_ContactUsMessages());
  }, []);

  return (
    <>
      <div className="contact-message-canvas">
      <ToastContainer />
        <div className="contact-message-canvas-top"></div>

        <div className="contact-message-canvas-bottom">
          {data.map((data, index) => {
            return (
              <React.Fragment key={index}>
                <div className="contact-message-bottom-card">
                  <div className="under-contact-message-card">
                    <div className="contact-message-card-left">
                      <div className="contact-message-card-left-field">
                        <GrUserManager />
                        <p>{data.clientName}</p>
                      </div>
                      <div className="contact-message-card-left-field">
                        <GrMailOption />
                        <p>{data.clientEmail}</p>
                      </div>
                      <div className="contact-message-card-left-field">
                        <IoCallOutline style={{ color: "black" }} />
                        <p>{data.clientPhone}</p>
                      </div>
                      <div className="contact-message-card-client-msg-sec">
                        <p>{data.clientMessage}</p>
                      </div>
                    </div>

                    <div className="contact-message-card-right">
                      {data.progress === "none" ? (
                        <div className="contact-meassge-crr-status">
                          <p>No One is Attending</p>
                        </div>
                      ) : (
                        <div className="contact-meassge-crr-status">
                          <p>user</p>
                          <p> Attending</p>
                        </div>
                      )}
                      {data.progress != "none" ? (
                        <div>
                          <div
                            style={{
                              borderColor:
                                data.progress === "attending"
                                  ? "#00f2ff"
                                  : "forestgreen",
                            }}
                            className="contact-message-right-line-first"
                          ></div>
                          <div
                            style={{
                              borderColor:
                                data.progress === "failed" ||
                                data.progress === "completed"
                                  ? "forestgreen"
                                  : "gray",
                            }}
                            className="contact-message-right-line-second"
                          ></div>
                          {data.progress === "attending" ? (
                            <div>
                              <p>Under progress</p>
                            </div>
                          ) : (
                            <div>
                              {data.progress === "failed" ? (
                                <div>
                                  <p>Failed</p>
                                </div>
                              ) : (
                                <div>
                                  <p>Completed</p>
                                </div>
                              )}
                            </div>
                          )}
                          <div className="contact-message-crr-response"></div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  {data.progress === "none" || data.progress === "attending" ? (
                    <div>
                      {data.progress === "none" ? (
                        <div className="contact-message-left-attend-sec">
                          <button
                            onClick={() =>
                              updateMessage({
                                progress: "attending",
                                messageId: data._id,
                              })
                            }
                          >
                            {" "}
                            Attend Client{" "}
                          </button>
                        </div>
                      ) : null}
                      {data.progress === "attending" &&
                      (data.attendingBy.userId === currentAdmin._id ||
                        userRole.role === "admin_1") ? (
                        <div>
                          <button
                            onClick={() =>
                              updateMessage({
                                progress: "failed",
                                messageId: data._id,
                              })
                            }
                          >
                            Failed
                          </button>
                          <button
                            onClick={() =>
                              updateMessage({
                                progress: "completed",
                                messageId: data._id,
                              })
                            }
                          >
                            Completed
                          </button>
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DisplayContactUsMessages;
