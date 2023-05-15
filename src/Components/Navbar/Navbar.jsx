import React from "react";
import "./Navbar.css";
import { Input } from "antd";
import Logo from "../../Assets/Images/Header/logo.png";
import searchIcon from "../../Assets/Images/Header/searchIcon.png";
import Burger from "../../Assets/Images/Header/burger.png";
import userImage from "../../Assets/Images/Header/userImage.png";
import NotificationIcon from "../../Assets/Images/Header/Notification.png";
import Calender from "../../Assets/Images/Header/menu-board.png";

const Navbar = ({ setCollapsed, collapsed }) => {
  return (
    <div className="navbar-container">
      <div className="navbar-left-div">
        <div className="logo-div">
          <img src={Logo} alt="header-logo" className="navbar-logo" />
          <button
            className="navbar-burger-span"
            onClick={() => setCollapsed(!collapsed)}
          >
            <img src={Burger} alt="header-burger" className="navbar-burger" />
          </button>
        </div>
        <div className="search-div">
          <Input
            style={{
              borderRadius: 20,
              width: 400,
              height: 40,
              border: "none",
              background: "#FFFFFF",
              boxShadow: " 4px 4px 17px rgba(38, 51, 77, 0.15)",
            }}
            placeholder="Search Here"
            suffix={
              <img
                src={searchIcon}
                alt="header-logo"
                style={{ height: 17.5, width: 17.5 }}
              />
            }
          />
        </div>
      </div>
      <div className="navbar-right-div">
        <span className="navbar-calender-span">
          <img src={Calender} alt="header-burger" className="navbar-calender" />
        </span>
        <span className="navbar-bell-span">
          <img
            src={NotificationIcon}
            alt="header-burger"
            className="navbar-bell"
          />
        </span>
        <img
          src={userImage}
          alt="header-burger"
          className="navbar-user-image"
        />
      </div>
    </div>
  );
};

export default Navbar;
