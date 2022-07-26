import React from "react";
import "../../../styles/donationGainList.css";

import { useSelector } from "react-redux";
import { BiRupee } from "react-icons/bi";


const DonationGainList = () => {
  
  const data = useSelector((state) => state.DonationGainReducer);

  const rowNumber = data.length;

  return (
    <>
      <div className="donation-list-canvas">

        <table className="donation-list-table">

          <thead className="donation-list-table-head">
            <tr>

              <th 
               style={{ textAlign: "start",paddingLeft:"10px" }} 
               className="donation-table-head-cell"
               >
               Sr. No
               </th>

              <th 
               className="donation-table-head-cell">
               Date
               </th>

              <th 
               className="donation-table-head-cell">
               Time
               </th>

              <th 
               style={{ textAlign: "end",paddingRight:"15px" }} 
               className="donation-table-head-cell"
               >
               Amount
               </th>

            </tr>
          </thead>

          <tbody >
            
           

            {data.map((data, index) => {

              return (

                <tr 
                 key={index} 
                 className="donation-table-body-row"
                 >
                  <td 
                   style={{ textAlign: "start" ,paddingLeft:"15px"}} 
                   className="donation-table-body-col"
                   >
                   {rowNumber - index}
                   </td>

                  <td 
                  className="donation-table-body-col">
                  {`${data.TXNDATE.substring( 8,10)}
                    ${data.TXNDATE.substring(4, 8)}
                    ${data.TXNDATE.substring(0,4)} 
                    `}
                  </td>

                  <td 
                   className="donation-table-body-col">
                   {data.TXNDATE.substring(11)}
                   </td>

                  <td 
                   style={{ textAlign: "end",color:"green",paddingRight:"15px" }} 
                   className="donation-table-body-col">
                    <span><BiRupee style={{display:"unset"}}/>
                    </span> <span>{data.TXNAMOUNT}</span>
                   </td>

                </tr>

              );

            })}

          </tbody>

        </table>

      </div>
    </>
  );
};

export default DonationGainList;
