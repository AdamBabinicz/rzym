import React, { useState, useEffect } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/1.png";
// import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";

// BEM -> Block Element Modifier

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  // const [scrollNav, setScrollNav] = useState(false);
  // const changeNav = () => {
  //   if (window.scrollY >= 80) {
  //     setScrollNav(true);
  //   } else {
  //     setScrollNav(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", changeNav);
  // }, []);

  // const toggleHome = () => {
  //   scroll.scrollToTop();
  // };

  return (
    <div
      className="gpt3__navbar"
      // scrollNav={scrollNav}
      // style={{
      //   background: `${({ scrollNav }) =>
      //     scrollNav ? "#000" : "transparent"}`,
      // }}
    >
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#start">Start</a>
          </p>
          <p>
            <a href="#dzieje">Dzieje</a>
          </p>
          <p>
            <a href="#cezar">Cezar</a>
          </p>
          <p>
            <a href="#imperium">Imperium</a>
          </p>
          <p>
            <a href="#społeczeństwo">Społeczeństwo</a>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        {/* <p>Sign in</p> */}
        <Link to="/potęga">
          <button type="button">Potęga</button>
        </Link>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#start">Start</a>
              </p>
              <p>
                <a href="#dzieje">Dzieje</a>
              </p>
              <p>
                <a href="#cezar">Cezar</a>
              </p>
              <p>
                <a href="#imperium">Imperium</a>
              </p>
              <p>
                <a href="#społeczeństwo">Społeczeństwo</a>
              </p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <Link to="/potęga">
                <button type="button">Potęga</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
