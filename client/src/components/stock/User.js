import React, { useEffect, useState } from "react";
import "../../styles/stockUser.css"
import userAvatar from "../../images/user.png";

const User = ({ userID }) => {
  let id = userID;
  const url = process.env.REACT_APP_SERVER_URL;

  const [user,setUser]=useState('');
  const getUser = async () => {
    
    if(id){
    const makeRequest = await fetch(`${url}/unique/member?key=${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const response = await makeRequest.json();
    console.log(response);
    setUser(response.data);
  }
  
  };
  console.log(id);
  console.log(user);

  useEffect(() => {
     getUser();
  }, []);

  return (
    <>
      <div className="stock-user-canvas">
        <div className="stock-user-profile">
          <img
            className="stock-user-profile-img"
            src={user ? `${url}/${user.image.filePath}` : userAvatar}
          />
        </div>
        <p className="stock-user-name">{user ? user.name : ""}</p>
      </div>
    </>
  );
};

export default User;
