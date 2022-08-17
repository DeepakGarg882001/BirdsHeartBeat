import React, { useEffect } from 'react'

import AttendOuery from './AttendOuery';
import MarkDone from './MarkDone';

import { useSelector, useDispatch } from 'react-redux';
import Get_ContactUsMessages from '../../redux/actions/ContactUsMessages_Action';

const DisplayContactUsMessages = () => {
  
    const currentAdmin = useSelector( (state) => state );
    const data = useSelector( (state) => state );

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(Get_ContactUsMessages());
    },[])


  return (
    <>
        <div>
              <div>

              </div>

              <div>
                  
                    <div>

                    </div>

              </div>
        </div>
    </>
  )
}

export default DisplayContactUsMessages;