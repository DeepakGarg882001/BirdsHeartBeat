import React,{useState} from 'react'
import "../../../styles/selectUser.css";


import { FaUserAlt } from "react-icons/fa";
import { IoIosMail  } from "react-icons/io";
import {IoHome,IoMan} from "react-icons/io5";
import {MdWork} from "react-icons/md"

import { useDispatch ,useSelector} from "react-redux";
import NotVerifiedUser from "../../../redux/actions/notVerifiedUserAction";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShowUserCard = ({data}) => {
  
 const [active,setActive]= useState(false);

 const user= useSelector((state) => state.CurrentUserReducer);
 
 const url = process.env.REACT_APP_SERVER_URL;
 
 const memberId = user._id;
 const memberName = user.name;


 const dispatch = useDispatch();


 const userVerified = async (values) => {
    
    setActive(!active);
   
    

    const postData = {
      name:values.name,
      action: values.action,
      email: values.email,
      memberId: memberId,
      memberName: memberName,
    };

    const makeRequest = await fetch(`${url}/join/approve`, {
      method: "POST",
      headers: {
        Accept:"application/json",
      "Content-Type": "application/json",
    },
    credentials:"include",
      body: JSON.stringify(postData),
    }).then(toast.info(`Hi,${memberName}. Please wait we are Verifying user`, {
      position: toast.POSITION.TOP_CENTER,
     
    }));

    const response = await makeRequest.json();
    console.log(response);

    dispatch(NotVerifiedUser());
    
    if (response.message) {
      toast.success(response.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.error(response.error, {
        position: toast.POSITION.TOP_CENTER,
      });
      setActive(!active);
    }
  };

  


  return (
    <>
       <div className="select-user-bottom-card">
                    <div className="select-user-card-top">
                      <div className="select-user-card-text-sec">
                        <FaUserAlt className="select-user-card-icon" />
                        <p> {data.name} </p>
                      </div>
                      <div className="select-user-card-text-sec">
                        <IoIosMail className="select-user-card-icon" />
                        <p> {data.email} </p>
                      </div>
                      <div className="select-user-card-text-sec">
                        <MdWork className="select-user-card-icon" />
                        <p> {data.occupation} </p>
                      </div> <div className="select-user-card-text-sec">
                        <IoMan className="select-user-card-icon" />
                        <p> {data.age} </p>
                      </div> <div className="select-user-card-text-sec">
                        <IoHome className="select-user-card-icon" />
                        <p> {data.address} </p>
                      </div>
                      <div className="select-user-card-message">
                        <h1>Message</h1>
                        <p>{data.message}</p>
                      </div>
                    </div>

                    <div className="select-user-card-bottom">
                      <button
                        disabled={active}
                        onClick={() =>
                          userVerified({
                            name:data.name,
                            email: data.email,
                            action: "not_Selected",
                          })
                        }
                      >
                        Reject
                      </button>
                      <button
                        disabled={active}
                        onClick={() =>
                          userVerified({
                            name:data.name,
                            email: data.email,
                            action: "selected",
                          })
                        }
                      >
                        Select
                      </button>
                    </div>
                  </div>
    </>
  )
}

export default ShowUserCard;