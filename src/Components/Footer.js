import React, { Component } from "react";

const Branch = () => {
  return (
    <div className="footer__container">
      <div className="footer__top">
        <a href="#home" className="footer__top__link">
          Home
        </a>
        <a href="#about" className="footer__top__link">
          About
        </a>
        <a href="#success" className="footer__top__link">
          Success
        </a>
        <a href="#story" className="footer__top__link">
          Story
        </a>
        <a href="#volunteer" className="footer__top__link">
          Volunteer
        </a>
        <a href="#donate" className="footer__top__link">
          Donate
        </a>
        <a href="#photos" className="footer__top__link">
          Photos
        </a>
        <a href="#contact" className="footer__top__link">
          Contact
        </a>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom__company-name">
          Latino Community Betterment Corportation
        </div>
        <div className="footer__bottom__copyright">
          © 2019 | All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Branch;
