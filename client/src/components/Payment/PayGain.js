import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import MovingIcon from '@mui/icons-material/Moving';

const PayGain = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-zinc-100">
        <div className=" rounded-md shadow-md shadow-slate-800 w-9/12 ">
          <div className="flex flex-row h-20  bg-slate-200 items-center justify-between pr-6">
            <div className=" justify-around pl-7 ">
              <h1 className=" text-blue-800 font-extrabold text-4xl">
                Donation Gain <MovingIcon sx={{fontSize:"2.5rem"}} />
              </h1>
            </div>
            <div className=" bg-white border p-3 rounded-md ">
              <h3 className=" text-lg text-orange-400 font-semibold">
                Total Gain : {" "}
                <span className=" text-lime-500"> xx <CurrencyRupeeIcon />
                </span>
              </h3>
            </div>
          </div>

          <div className="">
            <TableContainer>
              <Table>

                <TableHead className=" bg-slate-700 text-white">
                  <TableRow>
                    <TableCell
                      align="left"
                      sx={{ color: "white", fontSize: "1.5rem" }}
                    >
                      Sr.No.
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ color: "white", fontSize: "1.5rem" }}
                    >
                      Date
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ color: "white", fontSize: "1.5rem" }}
                    >
                      Time
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ color: "white", fontSize: "1.5rem" }}
                    >
                      Amount
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  
                  <TableRow className=" bg-white">
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ fontWeight: "550", fontSize: "1.1rem" }}
                    >
                      1
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ fontWeight: "550", fontSize: "1.1rem" }}
                    >
                      28:06:2022
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ fontWeight: "550", fontSize: "1.1rem" }}
                    >
                      11:30:26
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{color: "green",fontWeight: "550",fontSize: "1.1rem",}}
                    >
                      80
                    </TableCell>
                  </TableRow>

                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default PayGain;
