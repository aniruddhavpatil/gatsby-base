import React from 'react';
import './Navbar.scss';
import { Link, animateScroll as scroll } from 'react-scroll';

const CustomNavbar = () => (
  <div className="navbar">
    <Link to="landing" spy smooth className="item" onClick={() => console.log('Landing')}>
      Home
    </Link>
    <Link to="about" spy smooth className="item" onClick={() => console.log('About')}>
      About
    </Link>
    <Link to="experience" spy smooth className="item" onClick={() => console.log('Experience')}>
      Experience
    </Link>
    <Link to="contact" spy smooth className="item" onClick={() => console.log('Contact')}>
      Contact
    </Link>
  </div>
);

export default CustomNavbar;
