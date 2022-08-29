import React, { useState } from "react";
import "../../styles/makeUserAdmin.css";

import { MdOutlinePause, MdPlayArrow } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import NotAdmin_Users from "../../redux/actions/NotAdminUsers_Action";
import GetAllAdmins from "../../redux/actions/ShowAllAdmins_Action";


import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PauseAccount =  ({ data,pageType }) => {

  const currentUser = useSelector((state) => state.CurrentUserReducer);
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const url = process.env.REACT_APP_SERVER_URL;
  let query ="";

  const changeAccPlay = async (values) => {
    setActive(!active);

    const postData = {
      adminId: currentUser._id,
      accPlay: values.accPlay,
      userId: values.userId,
    };

    const makeRequest = await fetch(`${url}/member/acc/play`, {
      method: "POST",
      headers: {
        Accept:"application/json",
      "Content-Type": "application/json",
    },
    credentials:"include",
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
        {data. userAccPlay.accPlay != "block" ? (
          <button
            className="create-admin-sec-btn"
            disabled={active}
            onClick={() =>
              changeAccPlay({
                accPlay: "block",
                userId: data._id,
              })
            }
          >
            <MdPlayArrow style={{ color: "black" }} />
            <p style={{ color: "red" }}>pause it</p>
          </button>
        ) : (
          <button
            className="create-admin-sec-btn"
            disabled={active}
            onClick={() =>
              changeAccPlay({
                accPlay: "running",
                userId: data._id,
              })
            }
          >
            <MdOutlinePause style={{ color: "black" }} />
            <p>continue it</p>
          </button>
        )}
      </div>
    </>
  );
};

export default PauseAccount;
