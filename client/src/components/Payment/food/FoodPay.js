import React, { useEffect } from 'react'
import TempleteUtilise from '../Utilised/TempleteUtilise';

import { useSelector, useDispatch } from 'react-redux';
import FoodUtiliseAction from '../../../redux/actions/FoodUtiliseAction';
import { motion} from "framer-motion";

const FoodPay = () => {
  
  const data = useSelector((state)=>state.FoodUtiliseReducer );
  

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(FoodUtiliseAction());
  },[]);
  

  return (
   <>
    <TempleteUtilise
        data={data}
        
     />
   </>

  )
}

export default FoodPay;