import React from "react";
import "../../styles/menu.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import userImg from "../../images/user.png";
import { motion } from "framer-motion";

import {
  MdHome,
  MdOutlinePostAdd,
  MdAccountBalance,
  MdOutlineLogin,
  MdOutlineInfo,
  MdOutlineContactSupport,
} from "react-icons/md";
import { FaRegHandshake, FaUsers } from "react-icons/fa";
import { BiMessageSquareEdit } from "react-icons/bi";
import { HiOutlineCurrencyRupee, HiLink } from "react-icons/hi";
import { VscUnverified } from "react-icons/vsc";
import { RiShieldUserLine } from "react-icons/ri";
import { GiBackup } from "react-icons/gi";
import { GoCommentDiscussion } from "react-icons/go";
import { AiOutlinePicture } from "react-icons/ai";

import { useDispatch } from "react-redux";
import { LogOut_User } from "../../redux/actions/currentUserAction";

const Menu = ({ setActivePanel }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.CurrentUserReducer);
  const userRole = user.token ? user.userRole : [];
  return (
    <>
      <div className="menu-canvas">
        {user.token ? (
          <div className="side-panel-profile">
            <div className="side-panel-profile-img">
              <img
                src={user.image ? user.image : userImg}
                className="menu-profile-img"
              />
            </div>
            <div className="side-panel-profile-name">
              <h1>{user.name}</h1>
            </div>
          </div>
        ) : null}

        <div className="side-panel-options">
          <ul className="menu-list-desk">
            <Link to="/" onClick={() => setActivePanel("none")}>
              <li className="menu-list-option">
                <MdHome /> Home{" "}
              </li>
            </Link>

            {user.token ? (
              <Link
                to="/member/upload/work/bill"
                onClick={() => setActivePanel("none")}
              >
                <li className="menu-list-option">
                  <MdOutlinePostAdd /> Add Work{" "}
                </li>
              </Link>
            ) : (
              <Link to="/join" onClick={() => setActivePanel("none")}>
                <li className="menu-list-option">
                  <FaRegHandshake /> Join US{" "}
                </li>
              </Link>
            )}

            {userRole.role === "admin" || userRole.role === "admin_1" ? (
              <Link
                to="/member/verify/user/notVerified"
                onClick={() => setActivePanel("none")}
              >
                <li className="menu-list-option">
                  <VscUnverified /> Verify Users{" "}
                </li>
              </Link>
            ) : null}

            {userRole.role === "admin" || userRole.role === "admin_1" ? (
              <Link
                to="/member/make/admin"
                onClick={() => setActivePanel("none")}
              >
                <li className="menu-list-option">
                  <FaUsers /> Members{" "}
                </li>
              </Link>
            ) : (
              <Link to="/balance/gain" onClick={() => setActivePanel("none")}>
                <li className="menu-list-option">
                  <MdAccountBalance /> Balance{" "}
                </li>
              </Link>
            )}

            {userRole.role === "admin" || userRole.role === "admin_1" ? (
              <Link
                to="/admin/change/link"
                onClick={() => setActivePanel("none")}
              >
                <li className="menu-list-option">
                  <HiLink /> WhatsApp{" "}
                </li>
              </Link>
            ) : (
              <Link to="/donate" onClick={() => setActivePanel("none")}>
                <li className="menu-list-option">
                  <HiOutlineCurrencyRupee /> Donate{" "}
                </li>
              </Link>
            )}

            {userRole.role === "admin_1" ? (
              <Link
                to="/root/show/admin"
                onClick={() => setActivePanel("none")}
              >
                <li className="menu-list-option">
                  <RiShieldUserLine /> Admin's{" "}
                </li>
              </Link>
            ) : (
              <Link to="/members" onClick={() => setActivePanel("none")}>
                <li className="menu-list-option">
                  <FaUsers /> Members{" "}
                </li>
              </Link>
            )}

            {userRole.role === "admin_1" ? (
              <Link
                to="/add/supported/new"
                onClick={() => setActivePanel("none")}
              >
                <li className="menu-list-option">
                  <GiBackup /> Supported By
                </li>
              </Link>
            ) : (
              <Link to="/about" onClick={() => setActivePanel("none")}>
                <li className="menu-list-option">
                  <MdOutlineInfo /> About{" "}
                </li>
              </Link>
            )}
            {userRole.role === "admin_1" ? (
              <Link
                to="/root/show/admin"
                onClick={() => setActivePanel("none")}
              >
                <li className="menu-list-option">
                  <AiOutlinePicture /> New Memory{" "}
                </li>
              </Link>
            ) : (
              <Link to="/suggestions" onClick={() => setActivePanel("none")}>
                <li className="menu-list-option">
                  <BiMessageSquareEdit /> Suggestion{" "}
                </li>
              </Link>
            )}

            {userRole.role === "admin" || userRole.role === "admin_1" ? (
              <Link
                to="/admin/client/message"
                onClick={() => setActivePanel("none")}
              >
                <li className="menu-list-option">
                  <GoCommentDiscussion /> Client Message{" "}
                </li>
              </Link>
            ) : (
              <Link to="/contact" onClick={() => setActivePanel("none")}>
                <li className="menu-list-option">
                  <MdOutlineContactSupport /> Contact{" "}
                </li>
              </Link>
            )}

            {user.token ? (
              <Link
                to="/"
                onClick={() => {
                  dispatch(LogOut_User());
                  
                  setActivePanel("none");

                }}
              >
                <li className="menu-list-option">
                  <MdOutlineLogin /> Logout{" "}
                </li>
              </Link>
            ) : (
              <Link to="/login" onClick={() => setActivePanel("none")}>
                <li className="menu-list-option">
                  <MdOutlineLogin /> Login{" "}
                </li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
