import React from "react";
import "./Navbar.css";
import Logo from "../../Assets/Images/Header/logo.png";
import Burger from "../../Assets/Images/Header/burgerBtn.png";
import userImage from "../../Assets/Images/Header/userImage.png";
import NotificationIcon from "../../Assets/Images/Header/Notification.png";

const Navbar = ({ setCollapsed, collapsed }) => {
  return (
    <div className="navbar-container">
      <div className="logo-div">
        <img src={Logo} alt="header-logo" className="navbar-logo" />
      </div>
      <div className="navbar-left-div">
        <img
          src={Burger}
          alt="header-burger"
          className="navbar-burger"
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>
      <div className="navbar-right-div">
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
