import React from 'react'

import { useSelector } from 'react-redux';


const Organizations = () => {
  const url = process.env.REACT_APP_SERVER_URL;
   
  const data = useSelector( (state) => state.SupportedMemories_Reducer);

  return (

    <div>

    </div>

  )
}

export default Organizations;