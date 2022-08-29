import React, { useState } from "react";
import "../../styles/makeUserAdmin.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch } from "react-redux";
import NotAdmin_Users from "../../redux/actions/NotAdminUsers_Action";
import GetAllAdmins from "../../redux/actions/ShowAllAdmins_Action";

import { GrUserAdmin } from "react-icons/gr";

const CreateAdmin = ({ data, currentAdmin, pageType }) => {
  const adminId = currentAdmin._id;
  const adminName = currentAdmin.name;
  let query ="";
  const [active, setActive] = useState(false);

  const url = process.env.REACT_APP_SERVER_URL;

  const dispatch = useDispatch();

  const makeUser_Admin = async (values) => {
    setActive(!active);

    const postData = {
      userId: values.userId,
      action: values.action,
      adminId: adminId,
      adminName: adminName,
    };

    const makeRequest = await fetch(`${url}/member/acc/create/admin`, {
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
      if(pageType==="makeAdmin"){
        dispatch(NotAdmin_Users(query));
      }else{
        dispatch(GetAllAdmins(query));
      }
    } else {
      if (response.error.message) {
        toast.error(response.error.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.error(response.error, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }

    setActive(false);
  };

  return (
    <>
      <div className="create-admin-sec">
        {pageType === "makeAdmin" ? (
          <button
            className="create-admin-sec-btn"
            disabled={active}
            onClick={() => makeUser_Admin( {userId: data._id, action: "admin" })}
          >
            <GrUserAdmin style={{ color: "forestgreen" }} />
            <p>Make Admin</p>
          </button>
        ) : (
          <button
            className="create-admin-sec-btn"
            disabled={active}
            onClick={() =>
              makeUser_Admin({ userId: data._id, action: "member" })
            }
          >
            <GrUserAdmin style={{ color: "red" }} />
            <p style={{ color: "red" }}>Make Member</p>
          </button>
        )}
      </div>
    </>
  );
};

export default CreateAdmin;
