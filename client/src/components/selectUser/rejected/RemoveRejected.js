import React, { useState } from "react";
import "../../../styles/rejectedUsers.css";

import Get_RejectedUsers from "../../../redux/actions/RejectedUser_Action";
import { useDispatch } from "react-redux";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { MdOutlineDelete } from "react-icons/md";

const RemoveRejected = ({ data }) => {
  const dispatch = useDispatch();
  const url = process.env.REACT_APP_SERVER_URL;

  const [active, setActive] = useState(false);

  const deletUser = async (userId) => {

    setActive(!active);

    const makeRequest = await fetch(`${url}/user/rejected/remove`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ userId }),
    }).then(
      toast.info("Hi, Please wait we are Removing the user!", {
        position: toast.POSITION.TOP_CENTER,
      })
    );

    const response = await makeRequest.json();

    if (response.message) {
      toast.success(response.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      dispatch(Get_RejectedUsers());

    } else {
      toast.error(response.error, {
        position: toast.POSITION.TOP_CENTER,
      });
      setActive(!active);
    }
  };
  return (
    <>
      <div
        style={{
          justifyContent: "right",
          flexDirection: "row",
          display: "flex",
        }}
      >
        <button
          onClick={() => deletUser(data._id)}
          disabled={active}
          style={{ color: active ? "gray" : "red" }}
          className="rejected-user-table-btn"
        >
          <MdOutlineDelete />
          Remove
        </button>
      </div>
    </>
  );
};

export default RemoveRejected;
