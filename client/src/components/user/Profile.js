import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom';
import { motion} from "framer-motion";

import GetUniqueMemberData from '../../redux/actions/UniqueMemberData_Action';

import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {

   let {id} = useParams();

  const dispatch= useDispatch();
  const data = useSelector( (state) => state.UniqueMemberData_Reducer );
  
  useEffect( ()=>{
     dispatch(GetUniqueMemberData(id));
  },[])

  return (
   <>
     <div>
       <p> user id is :{id} </p>
     </div>
    
   </>
  )
}

export default Profile;