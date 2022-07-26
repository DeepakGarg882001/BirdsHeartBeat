import React,{useEffect} from 'react'

import TempleteUtilise from '../Utilised/TempleteUtilise';

import { useSelector,useDispatch } from 'react-redux';
import MaterialUtiliseAction from '../../../redux/actions/MaterialUtiliseAction';


const MaterialPay = () => {

  const data = useSelector((state)=>state.MaterialUtiliseReducer);
  
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(MaterialUtiliseAction());
  },[]);
  

  return (
    <>
      <TempleteUtilise
           data={data}
     />
    </>
  )
}

export default MaterialPay;