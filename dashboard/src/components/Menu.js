import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selected, setSelected] = useState(0);
  const [profileDropdown, setProfileDropdown] = useState(false);

  const handleMenuClick = (index) => {
    setSelected(index);
  };

  const handleProfileClick = () => {
    setProfileDropdown(!profileDropdown);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none", color: "inherit" }} to={'/'} onClick={() => handleMenuClick(0)}>
              <p className={selected === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "inherit" }} to={'/orders'} onClick={() => handleMenuClick(1)}>
              <p className={selected === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
          <Link style={{ textDecoration: "none", color: "inherit" }} to={'/holdings'} onClick={() => handleMenuClick(2)}>
          <p className={selected === 2 ? activeMenuClass : menuClass}>Holdings</p>
        </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "inherit" }} to={'/positions'} onClick={() => handleMenuClick(3)}>
              <p className={selected === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "inherit" }} to={'/funds'} onClick={() => handleMenuClick(4)}>
              <p className={selected === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "inherit" }} to={'/apps'} onClick={() => handleMenuClick(5)}>
              <p className={selected === 5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div
          className="profile"
          onClick={handleProfileClick}
        >
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
