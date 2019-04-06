import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
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
  );
};

export default NavBar;
