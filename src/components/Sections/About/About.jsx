import React from 'react';
import './About.scss';
import { Element } from 'react-scroll';

const CustomAbout = () => (
  <Element name="about" className="wrapper">
    <div className="wrapper">
      <div className="text">
        <div className="intro">Hello, I'm</div>
        <div className="name">Aniruddha Patil</div>
        <div className="description">I build to simplify</div>
        <div>
          I am a graduate student at the Indiana University of Bloomington, pursuing a Master's Degree in Computer Science.
        </div>
        <div>Currently looking for full-time opportunities for the roles of Web Development and Software Engineering.</div>
      </div>
    </div>
  </Element>
);

export default CustomAbout;
