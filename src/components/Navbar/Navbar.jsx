import React from 'react';
import './Navbar.scss';
import { Link, animateScroll as scroll } from 'react-scroll';

const CustomNavbar = () => (
  <>
    <div className="navbar">
      <div className="brand">AP</div>
      <div className="navbarItems">
        <Link to="landing" spy smooth className="item" onClick={() => console.log('Landing')}>
          <div type="button" className="button">
            Home
          </div>
        </Link>
        <Link to="about" spy smooth className="item" onClick={() => console.log('About')}>
          <div type="button" className="button">
            About
          </div>
        </Link>
        <Link to="experience" spy smooth className="item" onClick={() => console.log('Experience')}>
          <div type="button" className="button">
            Experience
          </div>
        </Link>
        <Link to="contact" spy smooth className="item" onClick={() => console.log('Contact')}>
          <div type="button" className="button">
            Contact
          </div>
        </Link>
      </div>
    </div>
  </>
);

export default CustomNavbar;
