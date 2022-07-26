import React, { useState } from "react";
import { post } from "./Paytm";

const Donation = () => {
  const url = process.env.REACT_APP_SERVER_URL;
  
  const [amount, setAmount] = useState(0.0);

  const getChecksum = async (amount) => {
    try {
        console.log(amount);
      const response = await fetch(`${url}/donate`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({amount:amount})
      });  
       
      const data = await response.json();
      

      let information = {
          action:"https://securegw-stage.paytm.in/order/process",
          params:data 
        }
    
      post(information);

    } catch (error) {
      console.log(error);
    }
    

  };

  const payWithPaytm = async() => {
      let decimal = Number(amount).toFixed(2);
      getChecksum(decimal);
    


  };

  const handelAmount = (e) => {
    let value = e.target.value;
    
    setAmount(value);
  };

  return (
    <>
      <input type="number" value={amount} onChange={handelAmount} />
      <button onClick={payWithPaytm}> Proceed </button>
    </>
  );
};

export default Donation;

// https://securegw-stage.paytm.in/order/process
