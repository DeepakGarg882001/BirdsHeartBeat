import React, { useEffect } from "react";
import "../../../styles/rejectedUsers.css";

import RemoveRejected from "./RemoveRejected";

import { useSelector, useDispatch } from "react-redux";
import Get_RejectedUsers from "../../../redux/actions/RejectedUser_Action";

import { useNavigate } from "react-router-dom";

const RejectedUsers = () => {
  const navigate = useNavigate();

  const data = useSelector((state) => state.RejectedUser_Reducer);

  const dispatch = useDispatch();
  const totalRow = data.length;

  const timeDuration = (prevDate) => {
    let date1 = new Date(prevDate).getTime();

    let date2 = new Date().getTime();

    let diff = date2 - date1;

    let days = diff / (1000 * 60 * 60 * 24);

    let totalDays = days.toFixed(0);
    return totalDays;
  };

  useEffect(() => {
    dispatch(Get_RejectedUsers());

    if (data.error) {
      if (!data.error.name) {
        Swal.fire("Sorry", data.error, "error");
      }

      navigate("/login");
    }
  }, []);

  return (
    <>
      <div className="rejected-canvas">
        <div className="rejected-canvas-main-sec">
          {data.length != 0 && !data.error ? (
            <table className="rejected-user-table">
              <thead 
              className="rejected-user-table-headRow">
                <tr>
                  <th
                    style={{ textAlign: "start", paddingLeft: "10px" }}
                    className="rejected-user-table-head"
                  >
                    Sr. No.
                  </th>
                  <th className="rejected-user-table-head"> Name </th>
                  <th className="rejected-user-table-head"> Email </th>
                  <th className="rejected-user-table-head"> Duration</th>
                  <th
                    style={{ textAlign: "end", paddingRight: "15px" }}
                    className="rejected-user-table-head"
                  >
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((data, index) => {
                  return (
                    <React.Fragment key={index}>
                      <tr 
                        style={{borderBottom: "1px solid #cdcbcb"}}>
                        <td 
                        style={{ textAlign: "start", paddingLeft: "20px" }}
                        className="rejected-user-table-body-row"
                        >
                          {totalRow - index}
                        </td>
                        <td
                        className="rejected-user-table-body-row"
                        >{data.name}</td>
                        <td
                        className="rejected-user-table-body-row"
                        >{data.email}</td>
                        <td
                        className="rejected-user-table-body-row"
                        >{timeDuration(data.updatedAt)} Days</td>
                        <td 
                        className="rejected-user-table-body-row"
                        style={{ textAlign: "end", paddingRight: "15px" }}>
                          <RemoveRejected data={data} />
                        </td>
                      </tr>
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className="rejected-canvas-no-user">
              <h1>No User Found Which is Rejected </h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RejectedUsers;
