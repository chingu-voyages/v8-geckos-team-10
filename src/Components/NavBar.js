import React from "react";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <div className="btn-container">
            <a href="#">Home</a>
          </div>
        </li>

        <li>
          <div className="btn-container">
            <a href="#">About Us</a>
          </div>
        </li>

        <li>
          <div className="btn-container">
            <a href="#">Diamond Stories</a>
          </div>
        </li>

        <li>
          <div className="btn-container">
            <a href="#">Photos</a>
          </div>
        </li>

        <li>
          <div className="btn-container">
            <a href="#">Volunteer</a>
          </div>
        </li>

        <li>
          <div className="btn-container">
            <a href="#">Donate</a>
          </div>
        </li>

        <li>
          <div className="btn-container">
            <a href="#">Contact Us</a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
