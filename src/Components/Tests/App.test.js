import React from 'react';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { Link } from "react-router-dom";
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });
describe('NavBar component testing', function() {
  it('renders Home link', () => {
    const wrapper = shallow(<NavBar />); 
    const home = <li className="navElement">
    <div className="btn-container">
      <Link className="navLink" to="/">
        Home
      </Link>
    </div>
  </li>
    expect(wrapper.contains(home)).to.equal(true);
  });
});
describe('NavBar component testing', function() {
    it('renders About us item', () => {
      const wrapper = shallow(<NavBar />); 
      const aboutUs = <li className="navElement">
      <div className="btn-container">
        <Link className="navLink" to="/about">
          About us
        </Link>
      </div>
    </li>;
      expect(wrapper.contains(aboutUs)).to.equal(true);
    });
  });
  describe('NavBar component testing', function() {
    it('renders Diamond stories item', () => {
      const wrapper = shallow(<NavBar />); 
      const stories = <li className="navElement">
      <div className="btn-container">
        <Link className="navLink" to="/stories">
              Diamond Stories
        </Link>
      </div>
    </li>;
      expect(wrapper.contains(stories)).to.equal(true);
    });
  });
  describe('NavBar component testing', function() {
    it('renders photos item', () => {
      const wrapper = shallow(<NavBar />); 
      const photos = <li className="navElement">
      <div className="btn-container">
        <Link className="navLink" to="/photos">
              Photos
        </Link>
      </div>
    </li>;
      expect(wrapper.contains(photos)).to.equal(true);
    });
  });
  describe('NavBar component testing', function() {
    it('renders volunteer item', () => {
      const wrapper = shallow(<NavBar />); 
      const volunteer = <li className="navElement">
      <div className="btn-container">
        <Link className="navLink" to="/volunteer">
              Volunteer
        </Link>
      </div>
    </li>;
      expect(wrapper.contains(volunteer)).to.equal(true);
    });
  });
  describe('NavBar component testing', function() {
    it('renders donate item', () => {
      const wrapper = shallow(<NavBar />); 
      const donate = <li className="navElement">
      <div className="btn-container">
        <Link className="navLink" to="/donate">
              Donate
        </Link>
      </div>
    </li>;
      expect(wrapper.contains(donate)).to.equal(true);
    });
  });
  describe('NavBar component testing', function() {
    it('renders contact us item', () => {
      const wrapper = shallow(<NavBar />); 
      const contact = <li className="navElement">
      <div className="btn-container">
        <Link className="navLink" to="/contact">
              Contact Us
        </Link>
      </div>
    </li>;
      expect(wrapper.contains(contact)).to.equal(true);
    });
  });
describe('Footer component testing', function() {
  it('renders footer message', function() {
    const wrapper = shallow(<Footer />); 
    const footer = <div className="footer__bottom">
    <div className="footer__bottom__company-name">
      Latino Community Betterment Corporation
    </div>
    <div className="footer__bottom__copyright">
      © 2019 | All Rights Reserved
    </div>
  </div>;
    expect(wrapper.contains(footer)).to.equal(true);
  });
});

