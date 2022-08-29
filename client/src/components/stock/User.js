import React, { useEffect } from "react";

import userAvtar from "../../images/user.png";

const User = ({ id }) => {
  const url = process.env.REACT_APP_SERVER_URL;

  let user;
  const getUser = async () => {
    const makeRequest = await fetch(`${url}/unique/member?key=${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const response = await makeRequest.json();

    user = response.data;
  };

  useEffect(() => {
    getUser;
  }, []);

  return (
    <>
      <div>
        <div>
          <img
            src={user.length != 0 ? `${url}/{user.image.filePath}` : userAvtar}
          />
        </div>
        <p>{user.name}</p>
      </div>
    </>
  );
};

export default User;
