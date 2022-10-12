import React ,{useEffect} from 'react'
import "../../styles/home.css";

import { useDispatch } from 'react-redux';
import DonationGainAction from '../../redux/actions/donationGainAction';

import Organizations from './Organizations';
import NewPics from './NewPics';
import SupportedMemories from '../../redux/actions/SupportedMemories_Action';
import GetNewMemories from '../../redux/actions/NewMemories_Action';
import { motion} from "framer-motion";

const Home = () => {

  const url = process.env.REACT_APP_URL;
    
  const dispatch = useDispatch();
  
  useEffect(()=>{
           dispatch(DonationGainAction(url));
           dispatch(GetNewMemories());
           dispatch(SupportedMemories());
   },[]);
 

  return (
    <>
        <div className='home-canvas'>
              
              {/* <div className='home-canvas-new-pic-sec'>
                <NewPics />
              </div>


             
             <div className='home-canvas-org-sec'>
               <Organizations />
             </div> */}

        </div>
    </>
  )
}

export default Home;