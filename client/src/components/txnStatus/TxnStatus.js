import React, { useEffect } from 'react'
import { useParams , useNavigate } from 'react-router-dom';
import swal from "sweetalert";
import {  } from 'react-router-dom';

const TxnStatus = () => {
   
  const navigate = useNavigate();

  let {key} = useParams();

  const getStatus=(key)=>{

  const msg227 = " Payment declined by your bank. If money has been deducted from your account, your bank will inform us within 48 hrs and we will refund the same. ";
  const msg235 = " Insufficient Balance ";
  const msg295 = " Invalid UPI ID ,Use a different method to complete the payment. ";
  const msg334 = " Invalid Order ID ";
  const msg335 = " Mid is invalid ";
  const msg401 = " Payment declined by your bank. If money has been deducted from your account, your bank will inform us within 48 hrs and we will refund the same. ";
  const msg501 = " Server is Down ";
  const msg801 = " Transaction Failed ";

  const msg01 = "Transaction Successfull ";
  const msg331 = " No Record Found ";
  const msg400 = "Pending,( Transaction status not confirmed yet. )";
  const msg402 = "Pending,( Transaction status not confirmed yet. )";



  switch (key) {

    case '227': swal("Sorry !", msg227 ,"info").then(()=>  navigate("/"));
                break;

    case '235': swal("Sorry !", msg235 ,"info").then(()=>  navigate("/")); 
                break;

    case '295': swal("Sorry !", msg295 ,"info").then(()=>  navigate("/"));
                break;

    case '334': swal("Sorry !", msg334 ,"info").then(()=>  navigate("/")); 
                break;

    case '335': swal("Sorry !", msg335 ,"info").then(()=>  navigate("/")); 
                break;

    case '401': swal("Sorry !", msg401 ,"info").then(()=>  navigate("/")); 
                break;

    case '501': swal("Sorry !", msg501 ,"info").then(()=>  navigate("/")); 
                break;

    case '810': swal("Sorry !", msg801 ,"info").then(()=>  navigate("/")); 
                break;


    case  '01': swal("Hurry !", msg01 ,"success").then(()=>  navigate("/balance"));  
                break;
    case '331': swal("Sorry !", msg331 ,"info").then(()=>  navigate("/"));  
                break;
    case '400': swal("Sorry !", msg400 ,"info").then(()=>  navigate("/"));  
                break;
    case '402': swal("Sorry !", msg402 ,"info").then(()=>  navigate("/"));  
                break;
    
    default:  swal("Sorry !", "something went wrong" ,"info").then(()=>navigate("/donate"));
                break;
   }
 }

 useEffect(()=>{

  getStatus(key);

  

 },[]);

  return (
    <>
      <h1> Transaction</h1> 
    </>
  )
}

export default TxnStatus;