import React from "react";
import { useSelector } from "react-redux";
import "../../styles/activityUser.css";
import userAvtar from "../../images/user.png";
import {SiGooglemaps} from "react-icons/si";
import UserWorkPost from "./UserWorkPost";


const ActivityUser = ({ user }) => {
  const data = useSelector((state) => state.UniqueMemberWork_Reducer);
  const url = process.env.REACT_APP_SERVER_URL;
   
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
    else if( totalPeriod >= 86400 && totalPeriod<604800){
      let day = (totalPeriod/(60*60*24)).toFixed(0);
      LastSeen = day +"  "+"days";
    }
    else if( totalPeriod >= 604800 ){
      let week = (totalPeriod/(60*60*24*7)).toFixed(0);
      LastSeen = week +"  "+"weeks";
    }

    return LastSeen;

  }


  console.log(data);

  return (
    <>
      <div className="user-activity-canvas">
        {data.length === 0 || data.error ? (
          <div>
            <h1>No Activity Yet</h1>
          </div>
        ) : (
          <div className="user-activity-detail-box">
            {data.map((data, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="user-activity-work-post">
                    <div className="user-activity-post-top">
                    <div className="user-post-top-about">
                      <div className="user-activity-post-user-img">
                        <img
                          src={user.image ? `${url}/${user.image.filePath}` : userAvtar}
                        />
                      </div>
                      <p className="user-activity-post-user-name">{user.name}</p>
                    </div>
                    <a href={`https://www.google.com/maps/search/?api=1&query=${data.location_latitude}%2C${data.location_longitude}`} >
                    <div>
                         <SiGooglemaps className="user-activity-post-location" />
                        </div>
                        </a>
                    </div>    
                     <UserWorkPost data={data}/>
                   
                    <div className="user-activity-post-bottom">
                        <div className="user-activity-post-duration">
                          <p>{lastSeen(data.createdAt)} ago</p>
                        </div>
                        
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default ActivityUser;
