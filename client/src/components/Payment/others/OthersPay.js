import React,{useEffect} from 'react'
import TempleteUtilise from '../Utilised/TempleteUtilise';

import { useSelector,useDispatch } from 'react-redux';
import OthersUtiliseAction from '../../../redux/actions/OthersUtiliseAction';


const OthersPay = () => {

  const data = useSelector((state)=>state.OthersUtiliseReducer);
  
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(OthersUtiliseAction());
  },[]);

  return (
    <>
      <TempleteUtilise
          data={data}
     />
    </>
  )
}

export default OthersPay;