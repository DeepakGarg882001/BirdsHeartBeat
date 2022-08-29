import React, { useEffect, useState } from "react";
import SelectMember from "../accountSetting.js/CreateAdmin";
import PauseAccount from "../accountSetting.js/PauseAccount";
import "../../styles/makeUserAdmin.css";

import { useDispatch, useSelector } from "react-redux";
import NotAdmin_Users from "../../redux/actions/NotAdminUsers_Action";

import { ToastContainer } from "react-toastify";
import { Link ,useNavigate} from "react-router-dom";

const MakeAdmin = () => {
  const data = useSelector((state) => state.NotAdminUser_Reducer);
  const currentAdmin = useSelector((state) => state.CurrentUserReducer);
  const [query,setQuery]= useState("");
  const dispatch = useDispatch();
  const totalrow = data.length;
  const navigate = useNavigate();

  const timeDuration = (prevDate) => {
    let date1 = new Date(prevDate).getTime();

    let date2 = new Date().getTime();

    let diff = date2 - date1;

    let days = diff / (1000 * 60 * 60 * 24);

    let totalDays = days.toFixed(0);
    return totalDays;
  };


  const lastSeen = (lastUpdated) =>{

    let lastDate = new Date(lastUpdated).getTime();

    let currentTime = new Date().getTime();

    let totalTime = currentTime - lastDate;

    let totalPeriod =  totalTime/1000;

    let LastSeen;

    if(totalPeriod<60){
      let sec = (totalPeriod).toFixed(0);
      LastSeen = sec +" "+"sec";
    }
    else if( totalPeriod >= 60 && totalPeriod<3600 ){
      let min = (totalPeriod/60).toFixed(0);
      LastSeen = min +"  "+"min";
    }
    else if( totalPeriod >= 3600 && totalPeriod<86400 ){
      let hr = (totalPeriod/(60*60)).toFixed(0);
      LastSeen = hr +"  "+"hr";
    }
    else if( totalPeriod >= 86400 ){
      let day = (totalPeriod/(60*60*24)).toFixed(0);
      LastSeen = day +"  "+"days";
    }
   
    return LastSeen;

  }

  useEffect(() => {
    if(currentAdmin.length===0){
      navigate("*");
   }else{
    dispatch(NotAdmin_Users(query));
   }
  }, [query]);

  return (
    <>
      <div className="makeUser-admin-canvas">
        <ToastContainer />

        <div className="makeUser-admin-canvas-top" >
          <h1>All Members are Here !</h1>
        </div>

        <div className="makeUser-admin-canvas-middle">
          <input
            placeholder=" Search... "
            className="makeUser-admin-middle-input"
            type="search"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="makeUser-admin-canvas-bottom">
          <div className="makeuser-admin-bottom-main">
            {data.length != 0 ? (
              <table className="makeuser-admin-table">
                <thead className="makeuser-admin-table-head">
                  <tr>
                    <th className="makeuser-admin-table-head-col">Sr. No.</th>
                    <th className="makeuser-admin-table-head-col"> Name </th>
                    <th className="makeuser-admin-table-head-col"> Email </th>
                    <th
                      className="makeuser-admin-table-head-col"
                      style={{ textAlign: "center" }}
                    >
                      {" "}
                      Join at{" "}
                    </th>
                    <th
                      className="makeuser-admin-table-head-col"
                      style={{ textAlign: "center" }}
                    >
                      {" "}
                      Duration{" "}
                    </th>
                    <th
                      className="makeuser-admin-table-head-col"
                      style={{ textAlign: "center" }}
                    >
                      {" "}
                      Last Seen{" "}
                    </th>
                    { currentAdmin.userRole.role === "admin_1" ? ( <th
                      className="makeuser-admin-table-head-col"
                      style={{ textAlign: "center" }}
                    >
                      {" "}
                      Admin{" "}
                    </th>) : null}
                   
                    <th
                      className="makeuser-admin-table-head-col"
                      style={{ textAlign: "center" }}
                    >
                      {" "}
                      Account{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((data, index) => {
                    return (
                      <React.Fragment key={index}>
                        <tr style={{ borderBottom: "1px solid #cecaca" }}>
                          <td className="makeuser-admin-table-body-col">
                            {totalrow - index}
                          </td>
                          <td className="makeuser-admin-table-body-col">
                            <Link to={`/profile${data._id}`}>{data.name}</Link>
                          </td>
                          <td className="makeuser-admin-table-body-col">
                            <Link to={`/profile${data._id}`}>{data.email}</Link>
                          </td>
                          <td
                            className="makeuser-admin-table-body-col"
                            style={{ textAlign: "center" }}
                          >
                            {new Date(data.createdAt).toLocaleDateString()}
                          </td>
                          <td
                            className="makeuser-admin-table-body-col"
                            style={{ textAlign: "center" }}
                          >
                            {timeDuration(data.createdAt)} Days
                          </td>
                          <td
                            className="makeuser-admin-table-body-col"
                            style={{ textAlign: "center" }}
                          >
                            {lastSeen(data.updatedAt)} ago
                          </td>
                          { currentAdmin.userRole.role === "admin_1" ? (<td
                            className="makeuser-admin-table-body-col"
                            style={{ textAlign: "center" }}
                          >
                            <SelectMember
                              data={data}
                              currentAdmin={currentAdmin}
                              pageType="makeAdmin"
                            />
                          </td>) : null }
                          
                          <td
                            className="makeuser-admin-table-body-col"
                            style={{ textAlign: "center" }}
                          >
                            <PauseAccount
                              data={data}
                              currentAdmin={currentAdmin}
                              pageType="makeAdmin"
                            />
                          </td>
                        </tr>
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <div className="make-member-admin-no-user">
                <h1> No Member found </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeAdmin;
