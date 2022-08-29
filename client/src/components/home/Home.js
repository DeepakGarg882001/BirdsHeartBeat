import React ,{useEffect} from 'react'
import "../../styles/home.css";

import { useDispatch } from 'react-redux';
import DonationGainAction from '../../redux/actions/donationGainAction';

import Organisations from './Organisations';
import NewPics from './NewPics';

import { motion} from "framer-motion";

const Home = () => {

  const url = process.env.REACT_APP_URL;
    
  const dispatch = useDispatch();
  
  useEffect(()=>{
           dispatch(DonationGainAction(url));
   },[]);
 

  return (
    <>
        <div className='home-canvas'>
              
              <div className='home-canvas-new-pic-sec'>
                <NewPics />
              </div>


             
             <div className='home-canvas-org-sec'>
               <Organisations />
             </div>

        </div>
    </>
  )
}

export default Home;