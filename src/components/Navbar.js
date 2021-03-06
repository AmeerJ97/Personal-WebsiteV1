import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <div className="nav-title">
            Ameer Osman </div>
            {/* <i class="fas fa-chess-knight"></i> */}
            {/* <i class='fab fa-typo3' /> */}
          </Link>

          {/* <Link class='social-icon-link resume'
             target='_blank'
             aria-label='Resume'>
             <a href='/files/AmeerOsmanCV.pdf' download>
             
             
             <i class="fas fa-file"></i>
             </a>
             </Link> */}
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
          
            <li className="nav-item">
              <Link
                to="/about-me"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Me
              </Link>
            </li>

            <li>
              <Link
                to="/contact-me"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Contact Me
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Contact Me</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
