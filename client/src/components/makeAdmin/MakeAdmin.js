import React ,{useEffect} from 'react'
import SelectMember from './CreateAdmin';
import PauseAccount from './PauseAccount';
import "../../styles/makeUserAdmin.css";

import { useDispatch, useSelector } from 'react-redux';
import NotAdmin_Users from '../../redux/actions/NotAdminUsers_Action';

import { ToastContainer } from "react-toastify";
import { Link } from 'react-router-dom';

const MakeAdmin = () => {

   const data =useSelector( (state) => state.NotAdminUser_Reducer );
   const currentAdmin = useSelector( (state) => state.CurrentUserReducer );
  
   const dispatch = useDispatch();
   const totalrow = data.length;

   const timeDuration = (prevDate) => {
    let date1 = new Date(prevDate).getTime();

    let date2 = new Date().getTime();

    let diff = date2 - date1;

    let days = diff / (1000 * 60 * 60 * 24);

    let totalDays = days.toFixed(0);
    return totalDays;
  };


   useEffect(()=>{
      dispatch(NotAdmin_Users());
   },[])

  return (
    <>
        <div className='makeUser-admin-canvas'>
             <ToastContainer />
            <div>

            </div>

            <div className='makeUser-admin-canvas-bottom'>
                  
                  <div className='makeuser-admin-bottom-main'>
                      
                  {data.length != 0 ?  

                    <table className='makeuser-admin-table'>
                        <thead className='makeuser-admin-table-head'>
                            <tr>
                                <th className='makeuser-admin-table-head-col' >Sr. No.</th>
                                <th className='makeuser-admin-table-head-col' > Name </th>
                                <th className='makeuser-admin-table-head-col' > Email </th>
                                <th className='makeuser-admin-table-head-col'  style={{textAlign:"center"}} > Join at </th>
                                <th className='makeuser-admin-table-head-col'  style={{textAlign:"center"}} > Duration </th>
                                <th className='makeuser-admin-table-head-col'  style={{textAlign:"center"}}  > Admin </th>
                                <th className='makeuser-admin-table-head-col'  style={{textAlign:"center"}} > Account </th>
                            </tr>
                        </thead>
                        <tbody>
                             { data.map((data,index)=>{
                                return(
                                    <React.Fragment key={index}>
                                       <tr style={{borderBottom:"1px solid #cecaca"}}>
                                        <td  className='makeuser-admin-table-body-col' >{totalrow-index}</td>
                                        <td  className='makeuser-admin-table-body-col' ><Link to={`/profile${data._id}`}>{data.name}</Link></td>
                                        <td  className='makeuser-admin-table-body-col' ><Link to={`/profile${data._id}`}>{data.email}</Link></td>
                                        <td  className='makeuser-admin-table-body-col' style={{textAlign:"center"}} >{new Date(data.createdAt).toLocaleDateString()}</td>
                                        <td  className='makeuser-admin-table-body-col' style={{textAlign:"center"}}  >{timeDuration(data.createdAt)} Days</td>
                                        <td  className='makeuser-admin-table-body-col' style={{textAlign:"center"}}  ><SelectMember
                                         data={data}
                                         currentAdmin={currentAdmin} />
                                         </td>
                                       <td  className='makeuser-admin-table-body-col' style={{textAlign:"center"}}  ><PauseAccount
                                         data={data}
                                         currentAdmin={currentAdmin} />
                                         </td>
                                       </tr>

                                    </React.Fragment>
                                );
                             })
                             
                             }
                        </tbody>
                    </table>

                    : (<div className='make-member-admin-no-user'>
                                <h1> No Member found </h1>
                             </div>)}


                  </div>

            </div>
        </div>
    </>
  )
}

export default MakeAdmin;