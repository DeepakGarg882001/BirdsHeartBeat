import React ,{useEffect} from 'react'

import TempleteUtilise from '../Utilised/TempleteUtilise';

import { useDispatch, useSelector } from 'react-redux';
import HealthUtiliseAction from '../../../redux/actions/HealthUtiliseAction';

const HealthPay = () => {

  const data = useSelector((state)=>state.HealthUtiliseReducer);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(HealthUtiliseAction());
  },[]);

  return (
    <>
     <TempleteUtilise
          data={data}
     />
    </>
  )
}

export default HealthPay;