import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Footer from '../Footer';
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });
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
