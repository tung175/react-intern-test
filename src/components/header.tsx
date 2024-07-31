import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png"
import "./header.scss";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <img src={Logo} className="logo"></img>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <i className={showNavbar === true ? "fa-solid fa-x" : "fa-solid fa-bars"} ></i>
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/users-table">Users table</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default Header;
