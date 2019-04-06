import React from "react";

const NavBar = () => {
  return (
    <div className="navBar">
      <ul className="navBar-list">
        <li>
          <div className="btn-container">
            <a href="#home">Home</a>
          </div>
        </li>

        <li>
          <div className="btn-container">
            <a href="#about">About Us</a>
          </div>
        </li>

        <li>
          <div className="btn-container">
            <a href="#story">Diamond Stories</a>
          </div>
        </li>

        <li>
          <div className="btn-container">
            <a href="#photos">Photos</a>
          </div>
        </li>

        <li>
          <div className="btn-container">
            <a href="#volunteer">Volunteer</a>
          </div>
        </li>

        <li>
          <div className="btn-container">
            <a href="#donate">Donate</a>
          </div>
        </li>

        <li>
          <div className="btn-container">
            <a href="#contact">Contact Us</a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
