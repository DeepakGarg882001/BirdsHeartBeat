import React,{useEffect} from 'react'
import "../../styles/stock.css";
import {useSelector ,useDispatch} from "react-redux";
import User from "./User";
import {IoAdd} from "react-icons/io5";
import GetStocks from '../../redux/actions/Stock_Action';
import {Link }  from "react-router-dom";
const ShowStock = () => {
   
  const data = useSelector( (state)=> state.Stock_Reducer );
   
  const dispatch = useDispatch();

  useEffect( ()=>{
    dispatch(GetStocks());
  },[]);

  return (
   <>
    <div className='stock-canvas'>
         
         <div className='stock-create-btn-sec'>
            <Link to="/stock/create">
             <div>
              <IoAdd />
             </div>
             </Link>
         </div>

         <div className='stock-canvas-body'>
             
             {data.length != 0 ? (<div className='stock-canvas-body-item'>
                     
                     <div className="stock-item-top" >
                             <div className='stock-item-top-user'>
                                <User userID = {data.sender.userId}/>
                             </div>
                             <div className='stock-item-top-user'></div>
                             <div className='stock-item-top-user'>
                              <User userID = {data.receiver.userId}/>
                             </div>

                     </div>

                     <div className="stock-item-middle">
                         <table>
                          <thead>
                            <tr>
                              <th> Image</th>
                              <th> Name</th>
                              <th> Category</th>
                              <th> Cost/item</th>
                              <th>Total Items</th>
                              <th> Total Amount</th>
                              <th> Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{data.itemImage.filepath}</td>
                              <td>{data.itemName}</td>
                              <td>{data.itemCategory}</td>
                              <td>{data.itemPrice}</td>
                              <td>{data.totalItems}</td>
                              <td>{data.totalAmount}</td>
                              <td>{data.receiver.accepted}</td>
                            </tr>
                          </tbody>
                         </table>
                     </div>

                     <div className="stock-item-bottom">
                         <div>
                          <button>Show Distribution</button>
                         </div>

                         <div>
                            <table>
                              <thead>
                                <tr>
                                  <th>Member </th>
                                  <th>Date</th>
                                  <th>Pic</th>
                                  <th>Amount</th>
                                  <th>Status</th>
                                  <th>Executed</th>

                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                              </tbody>
                            </table>

                         </div>

                     </div>

               </div>): (<div><p> No Stock Currently </p></div>)}
               


         </div>

    </div>
   </>
  )
}

export default ShowStock;