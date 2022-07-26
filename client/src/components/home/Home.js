import React ,{useEffect} from 'react'
import { useDispatch } from 'react-redux';
import DonationGainAction from '../../redux/actions/donationGainAction';


const Home = () => {

  const url = process.env.REACT_APP_URL;
    
  const dispatch = useDispatch();
  
  useEffect(()=>{
           dispatch(DonationGainAction(url));
   },[]);
 

  return (
    <>
        <h1>Home page</h1>
    </>
  )
}

export default Home;