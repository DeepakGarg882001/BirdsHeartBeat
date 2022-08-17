import React ,{useEffect}from 'react'
import "../../../styles/selectUser.css";

import { useDispatch,useSelector} from "react-redux";
import NotVerifiedUser from "../../../redux/actions/notVerifiedUserAction"

import ShowUserCard from "./ShowUserCard";
import { useNavigate } from 'react-router-dom';
import { motion} from "framer-motion";
import Swal from 'sweetalert2';




const NotVerified = () => {
 
  const navigate= useNavigate();

  
  const data = useSelector((state) => state.NotVerifiedUserReducer);
  const dispatch= useDispatch();
  console.log(data);
  
  

  useEffect(() => {
    dispatch(NotVerifiedUser());

    if(data.error){
       
      if(!data.error.name){
        Swal.fire("Sorry",data.error,"error");
      }

      navigate("/login");
    }
  },[]);



  return (
   <>
      <div className="select-user-bottom">
          {data.length !=0 && !data.error ? (
            data.map((data, index) => {
              return (
                <React.Fragment key={index}>
                 <ShowUserCard 
                  data={data}
                 />
                </React.Fragment>
              );
            })
          ) : (
            <div className="select-user-no-user">
              <h1> No User is Pendding For VERIFICATION </h1>
            </div>
          )}
        </div>
   </>
  )
}

export default NotVerified;