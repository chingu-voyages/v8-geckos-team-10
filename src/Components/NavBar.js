import React from "react";

const NavBar = () => {
  return (
    <div className="navBar">
        <ul className="navBar-list">
          <li className='navElement'>
            <div className="btn-container">
              <a className='navLink' href="#home">Home</a>
            </div>
          </li>

          <li className='navElement'>
            <div className="btn-container">
              <a className='navLink' href="#about">About Us</a>
            </div>
          </li>

          <li className='navElement'>
            <div className="btn-container">
              <a className='navLink' href="#story">Diamond Stories</a>
            </div>
          </li>

          <li className='navElement'>
            <div className="btn-container">
              <a className='navLink' href="#photos">Photos</a>
            </div>
          </li>

          <li className='navElement'>
            <div className="btn-container">
              <a className='navLink' href="#volunteer">Volunteer</a>
            </div>
          </li>

          <li className='navElement'>
            <div className="btn-container">
              <a className='navLink' href="#donate">Donate</a>
            </div>
          </li>

          <li className='navElement'>
            <div className="btn-container">
              <a className='navLink' href="#contact">Contact Us</a>
            </div>
          </li>
        </ul>
      </div>
      
  );
};

export default NavBar;
