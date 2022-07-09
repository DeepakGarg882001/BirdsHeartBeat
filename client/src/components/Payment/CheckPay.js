import React from 'react'
import PayGain from './PayGain';
import PayUtilised from './PayUtilised';
const CheckPay = () => {
  return (
   <>
    <h1>Check all the payments here </h1>
    <PayGain />
    <br/>
    <PayUtilised />
   </>
  )
}

export default CheckPay;