import React,{useEffect} from 'react'

import TempleteUtilise from '../Utilised/TempleteUtilise';

import { useSelector,useDispatch } from 'react-redux';
import NestUtiliseAction from '../../../redux/actions/NestUtiliseAction';


const NestPay = () => {

  const data = useSelector((state)=>state.NestUtiliseReducer);
   
  
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(NestUtiliseAction());
  },[]);

  return (
   <>
     <TempleteUtilise
          data={data}
     />
   </>
  )
}

export default NestPay;