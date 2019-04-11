import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavBar = () => {
  return (
  <div>
    <div className="navBar">
      <ul className="navBar-list">
        <li className="navElement">
          <div className="btn-container">
            <Link className="navLink" to="/">
              Home
            </Link>
          </div>
        </li>

        <li className="navElement">
          <div className="btn-container">
            <Link className="navLink" to="/about">
              About us
            </Link>
          </div>
        </li>

        <li className="navElement">
          <div className="btn-container">
            <Link className="navLink" to="/stories">
              Diamond Stories
            </Link>
          </div>
        </li>

        <li className="navElement">
          <div className="btn-container">
            <Link className="navLink" to="/photos">
              Photos
            </Link>
          </div>
        </li>

        <li className="navElement">
          <div className="btn-container">
            <Link className="navLink" to="/volunteer">
              Volunteer
            </Link>
          </div>
        </li>

        <li className="navElement">
          <div className="btn-container">
            <Link className="navLink" to="/donate">
              Donate
            </Link>
          </div>
        </li>

        <li className="navElement">
          <div className="btn-container">
            <Link className="navLink" to="/contact">
              Contact Us
            </Link>
          </div>
        </li>
      </ul>
    </div>

    <div className='responsive'>
      <ul className="navBar-list">
          <li className="navElement">
            <div className="btn-container">
              <Link className="navLink" to="/">
                Home
              </Link>
            </div>
          </li>
          <li >

              <input type="checkbox" id="menu"/>
              <label id='collapsible-btn' for="menu"><FontAwesomeIcon icon="gem" /></label>
              <div class="menu-content">
                <ul>
                    <li><a href="#"></a>About Us</li>
                    <li><a href="#"></a>Diamond Stories</li>
                    <li><a href="#"></a>Photos</li>
                    <li><a href="#"></a>Volunteer</li>
                    <li><a href="#"></a>Donate</li>
                    <li><a href="#"></a>Contact Us</li>
                </ul>
            </div>
          </li>

      </ul>
            
    
    </div>
  </div>

    
  );
};

export default NavBar;
