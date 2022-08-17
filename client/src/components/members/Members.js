import React, { useEffect, useState } from 'react'
import "../../styles/members.css"

import userImg from "../../images/user.png"
import { useDispatch,useSelector} from "react-redux"
import GetMembersData from '../../redux/actions/MembersAction'
import {Link} from "react-router-dom"
import { motion} from "framer-motion";

const Members = () => {
  
  const data = useSelector((state)=>state.MembersDataReducer);

  console.log(data);
  const dispatch = useDispatch();
  
  const [query,setQuery]= useState("");

  useEffect(()=>{
    dispatch(GetMembersData(query));
  },[query]);


  return (
    <> 
     <div className='members-canvas'>
      
      <div className='members-canvas-top'>
          
          <input 
          placeholder=' Search... '
          className='member-canvas-search'
          type="search"
          onChange={(e)=> setQuery(e.target.value)}
           />

      </div>
      <div className='members-canvas-bottom'>
           
         {data ? data.map((data,index)=>{
          return(
            <React.Fragment key={index}>
            <div className='members-canvas-card'>
            <Link to={`/profile${data._id}`}>

              <div className='under-member-canvas-card'>
                <div className='members-card-img-sec'>
                  <img className='members-img-size' src={data.image ? data.image :  userImg}  />
                </div>
                <div className='members-name-sec'>
                  <h1> {data.name} </h1>
                </div>
                <div className='members-details-sec'>
                  <p className='members-status'>{data.occupation}</p>
                  <p className='members-address'>{data.address}</p>
                </div>
              </div>
           </Link>
           </div> 
            </React.Fragment>
          );

         }) : <div>
               <h1> No Member Found yet !</h1>
         </div> }

          
      </div>
      
     </div>
        
    </>
  )
}

export default Members;