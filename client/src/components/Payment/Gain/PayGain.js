import React from "react";
import { useEffect } from "react";
import "../../../styles/payGain.css";

import { useSelector, useDispatch } from "react-redux";
import DonationGainAction from "../../../redux/actions/donationGainAction";

import { BiRupee } from "react-icons/bi";
import { BsGraphUp } from "react-icons/bs";

import DonationGainList from "./DonationGainList";

const PayGain = () => {
  const url = process.env.REACT_APP_URL;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(DonationGainAction(url));
  }, []);

  const data = useSelector((state) => state.BalanceStatusReducer);

  return (
    <>
      <div className="payGain-canvas">
        <div className="payGain-canvas-listBox">
          <div className="payGain-canvas-header">
            <div className="payGain-header-name-sec">
              <h1 className="payGain-header-name">
                Donation Gain <BsGraphUp />
              </h1>
            </div>
            <div className="payGain-header-right">
              <h3 className="payGain-header-right-name">
                Total Gain :
              </h3>
              <span className="payGain-header-right-amount">
                {data.total_donation_gain}
              </span>
              <BiRupee className="payGain-header-right-icon"/>
            </div>
          </div>

          <DonationGainList />
        </div>
      </div>
    </>
  );
};

export default PayGain;
