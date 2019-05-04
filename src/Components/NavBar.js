import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NavBar extends Component {
  render() {
    const { menuOpen, toggleMenu } = this.props;
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

        <div className="responsive">
          <div className="navBar-list">
            <div
              className={
                menuOpen
                  ? "collapsible-btn collapsible-btn--active"
                  : "collapsible-btn collapsible-btn--default"
              }
              htmlFor="menu"
              onClick={() => toggleMenu()}
            >
              <FontAwesomeIcon icon="gem" id="diamondIcon" />
              <span id="menuLabel">Menu</span>
            </div>
            <div
              className={
                menuOpen ? "menu-content--open" : "menu-content--closed"
              }
            >
              <div className="menu-container">
                <Link className="menu-item" to="/">
                  Home
                </Link>
                <Link className="menu-item" to="/about">
                  About Us
                </Link>
                <Link className="menu-item" to="/stories">
                  Diamond Stories
                </Link>
                <Link className="menu-item" to="/photos">
                  Photos
                </Link>
                <Link className="menu-item" to="/volunteer">
                  Volunteer
                </Link>
                <Link className="menu-item" to="/donate">
                  Donate
                </Link>
                <Link className="menu-item" to="/contact">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
