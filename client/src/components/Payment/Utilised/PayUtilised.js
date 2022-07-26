import React, { useEffect, useState } from "react";
import "../../../styles/payUtilised.css";

import { BiRupee } from "react-icons/bi";
import { BsGraphUp } from "react-icons/bs";

import { useSelector } from "react-redux";
import { Link, Outlet, useLocation } from "react-router-dom";

const PayUtilised = () => {
  const data = useSelector((state) => state.BalanceStatusReducer);

  const currentPath = useLocation().pathname;

  const foodAmount = data.total_food_amount;
  const materialAmount = data.total_material_amount;
  const healthAmount = data.total_health_amount;
  const nestAmount = data.total_nest_amount;
  const otherAmount = data.total_others_amount;

  const [amount, setAmount] = useState(foodAmount);

  useEffect(() => {
    
    if (currentPath === "/balance/utilise/food") {
      setAmount(foodAmount);
    } else if (currentPath === "/balance/utilise/material") {
      setAmount(materialAmount);
    } else if (currentPath === "/balance/utilise/health") {
      setAmount(healthAmount);
    } else if (currentPath === "/balance/utilise/nest") {
      setAmount(nestAmount);
    } else if (currentPath === "/balance/utilise/other") {
      setAmount(otherAmount);
    }

  }, [currentPath]);

  
  return (
    <>
      <div className="payUtilise-canvas">
        <div className="payUtilise-canvas-listBox">
          <div className="payUtilise-canvas-header">
            <div className="payUtilise-header-name-sec">
              <h1 className="payUtilise-header-name">
                Donation Utilise <BsGraphUp />
              </h1>
            </div>
            <div className="payUtilise-header-right">
              <h3 className="payUtilise-header-right-name">Total Utilise :</h3>
              <span className="payUtilise-header-right-amount">{amount}</span>
              <BiRupee className="payUtilise-header-right-icon" />
            </div>
          </div>
        </div>

        <div className="payUtilise-middle-part">
          <div className="under-payUtilise-middle-part">
            <div className="payUtilise-middle-part-tabs">
              <Link to="/balance/utilise/food">
                <button
                  className="payUtilise-tab-name"
                  style={{
                    borderBottom:
                      currentPath === "/balance/utilise/food"
                        ? "4px solid #e9a703"
                        : "none",
                  }}
                >
                  Food
                </button>
              </Link>

              <Link to="/balance/utilise/material">
                <button
                  className="payUtilise-tab-name"
                  style={{
                    borderBottom:
                      currentPath === "/balance/utilise/material"
                        ? "4px solid #e9a703"
                        : "none",
                  }}
                >
                  Material
                </button>
              </Link>

              <Link to="/balance/utilise/health">
                <button
                  className="payUtilise-tab-name"
                  style={{
                    borderBottom:
                      currentPath === "/balance/utilise/health"
                        ? "4px solid #e9a703"
                        : "none",
                  }}
                >
                  Health
                </button>
              </Link>

              <Link to="/balance/utilise/nest">
                <button
                  className="payUtilise-tab-name"
                  style={{
                    borderBottom:
                      currentPath === "/balance/utilise/nest"
                        ? "4px solid #e9a703"
                        : "none",
                  }}
                >
                  Nest
                </button>
              </Link>

              <Link to="/balance/utilise/other">
                <button
                  className="payUtilise-tab-name"
                  style={{
                    borderBottom:
                      currentPath === "/balance/utilise/other"
                        ? "4px solid #e9a703"
                        : "none",
                  }}
                >
                  Others
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default PayUtilised;
