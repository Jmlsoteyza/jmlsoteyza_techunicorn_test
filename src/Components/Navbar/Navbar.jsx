import React from "react";
import phonesvg from "../../assets/phonesvg.svg";
import logo from "../../assets/logo.svg";
import navheart from "../../assets/navheart.svg";
import navcart from "../../assets/navcart.svg";
import navuser from "../../assets/navuser.svg";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-inner_container">
        <div className="top-navbar">
          <span className="navbar-contact">
            <img src={phonesvg} alt={phonesvg} />
            <p className="navbar-number">+971-54-561-7393</p>
          </span>
          <span>
            <img src={logo} alt={logo} />
          </span>
          <div>
            <span>
              <p>Fb</p>
            </span>
            <span>
              <p>Tw</p>
            </span>
            <span>
              <p>lg</p>
            </span>
            <span>
              <p>Yt</p>
            </span>
          </div>
        </div>
        <div className="down-navbar">
          <ul>
            <li className="home-style">Home</li>
            <li>About</li>
            <li>FAQ</li>
            <li>Blog</li>
          </ul>
          <ul className="icon-container">
            <li>
              <img src={navheart} alt={navheart} />
            </li>
            <li className="icon-cart">
            <span className="icon-number">3</span>
              <img src={navcart} alt={navcart} />
            </li>
            <li>
              <img src={navuser} alt={navuser} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
