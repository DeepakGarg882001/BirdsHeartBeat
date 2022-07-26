import React,{useState} from 'react'
import "../../../styles/utiliseTemplate.css";

import { Link } from 'react-router-dom';

import { BiRupee } from "react-icons/bi";
import AccordionUtilise from './AccordionUtilise';


const TempleteUtilise = ({data}) => {

  const totalRow = data.length;

    
  return (
    <>
        <div className='templete-canvas'>
             
           <table className='templete-table'>
             
             <thead className='templete-table-head'>
                <tr>
                    <th className='templete-table-head-col' style={{textAlign:"left",paddingLeft:"15px"}}>Sr. No.</th>
                    <th className='templete-table-head-col'> Date </th>
                    <th className='templete-table-head-col'> Member </th>
                    <th className='templete-table-head-col' style={{textAlign:"right",paddingRight:"15px"}}> Amount </th>
                </tr>
             </thead>
                  
             <tbody >
               
               {data.map((data,index)=>{
                return(
                    <React.Fragment key={index}>
                  
                    <tr >
                     <td  className='templete-table-body-row' style={{textAlign:"left",paddingLeft:"15px"}}> {totalRow-index}</td>
                     <td  className='templete-table-body-row'> {`${data.date.substring( 8,10)}
                    ${data.date.substring(4, 8)}
                    ${data.date.substring(0,4)} 
                    `} </td>
                     <td  className='templete-table-body-row'><Link to={`/profile${data.userId}`}> {data.userName}</Link></td>
                     <td  className='templete-table-body-row' style={{textAlign:"right",paddingRight:"15px",color:"green"}}>
                     <span><BiRupee style={{display:"unset"}}/>
                    </span> <span> {data.amount} </span></td>
                   </tr>
                   <tr>
                     <td className='accordion-canvas' colSpan="4" >
                       <AccordionUtilise data={data}/>
                     </td>
                   </tr>
                   
                   </React.Fragment>
                );
               })}
                  


                  
             </tbody>

           </table>
              
        </div>
    </>
  )
}

export default TempleteUtilise;