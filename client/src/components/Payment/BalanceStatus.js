import React, { useEffect } from "react";
import "../../styles/balanceStatus.css";
import { BiRupee } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import BalanceStatusAction from "../../redux/actions/balanceStautsAction";

const BalanceStatus = () => {
  const data = useSelector((state) => state.BalanceStatusReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(BalanceStatusAction());
  }, []);
  
  const DonationGain = data.total_donation_gain;
  const DonationUtilised = data.total_donation_utilised;
  let currentBalance = 0;

  DonationGain ? 
    currentBalance = DonationGain - DonationUtilised :  currentBalance = 0;

  

  return (
    <>
      <div className="balance-canvas">
        <div className="balance-canvas-box">
          <div className="under-balance-box">
            <h3 className="balance-box-name"> Total Donation Gain : </h3>
            <h3 className="balance-box-amount">{DonationGain}</h3>
            <BiRupee className="balance-box-icon" />
          </div>
        </div>

        <div className="balance-canvas-box">
          <div className="under-balance-box">
            <h3 className="balance-box-name"> Current Balance : </h3>
            <h3 className="balance-box-amount">{currentBalance}</h3>
            <BiRupee className="balance-box-icon" />
          </div>
        </div>

        <div className="balance-canvas-box">
          <div className="under-balance-box">
            <h3 className="balance-box-name"> Total Donation Utilised : </h3>
            <h3 className="balance-box-amount">
              {DonationUtilised}
            </h3>
            <BiRupee className="balance-box-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BalanceStatus;
