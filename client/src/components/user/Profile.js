import React from 'react'

import { useParams } from 'react-router-dom';

const Profile = () => {
  
  let {id} = useParams();
  

  return (
   <>
     <div>
       <p> user id is :{id} </p>
     </div>
    
   </>
  )
}

export default Profile;