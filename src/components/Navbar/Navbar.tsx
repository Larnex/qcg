import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import logo from "../../assets/logo/logo_yellow.png";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  // const [toggleMenu, setToggleMenu] = useState(false);
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // const toggleNav = () => {
  //   setToggleMenu(!toggleMenu);
  // };

  // useEffect(() => {
  //   const changeWidth = () => {
  //     setScreenWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", changeWidth);

  //   return () => {
  //     window.removeEventListener("resize", changeWidth);
  //   };
  // }, []);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a className="nav-logo" href="#">
            <img src={logo} alt="logo" className="navbar--logo" />
          </a>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a className="nav-links" onClick={handleClick} href="#vision">
                Vision
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-links" onClick={handleClick} href="#goals">
                Goals
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-links" onClick={handleClick} href="#network">
                Network Of Security
              </a>
            </li> */}

            <li className="nav-item">
              <a className="nav-links" onClick={handleClick} href="#shop">
                Shop for Security
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-links" onClick={handleClick} href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}
            {click ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
        </div>
      </nav>
    </>

    // <nav>
    //   {(toggleMenu || screenWidth > 500) && (
    //     <ul className="list">
    //       <li className="items">
    //         <a href="#home">Home</a>
    //       </li>
    //       <li className="items">
    //         <a href="#vision">Vision</a>
    //       </li>
    //       <li className="items">
    //         <a href="#goals">Goals</a>
    //       </li>
    //       <li className="items">
    //         <a href="#network">Network Of Security</a>
    //       </li>
    //       <li className="items">
    //         <a href="#shop">One-Stop Shop</a>
    //       </li>
    //       <li className="items">
    //         <a href="#contact">Contact</a>
    //       </li>
    //     </ul>
    //   )}

    //   <button onClick={toggleNav} className="btn">
    //     MENU
    //   </button>
    // </nav>
  );
}
