import React,{useState} from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";


const PayUtilised = () => {

   

  return (
    <>
      <div className="flex justify-center items-center bg-zinc-100">
        <div className=" rounded-md shadow-md shadow-slate-800 w-9/12 ">
          <div className="flex flex-row h-20  bg-slate-200 items-center justify-between pr-6">
            <div className=" justify-around pl-7 ">
              <h1 className=" text-blue-800 font-extrabold text-4xl">
                Donation Utilised{" "}
                <TrendingDownIcon sx={{ fontSize: "2.5rem" }} />
              </h1>
            </div>
            <div className=" bg-white border p-3 rounded-md ">
              <h3 className=" text-lg text-orange-400 font-semibold">
                Used :{" "}
                <span className=" text-lime-500">
                  xx <CurrencyRupeeIcon />
                </span>
              </h3>
            </div>
          </div>

          <div className="">
             <div>
                <ul className="flex flex-row justify-around text-2xl text-amber-400  font-bold p-7" >
                    <li> Food </li>
                    <li> Material </li>
                    <li> Health </li>
                    <li> Nest </li>
                    <li> Technical </li>
                </ul>
             </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default PayUtilised;
