import React from 'react';
import './Landing.scss';
import Anime, { anime } from 'react-anime';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ParticleTheme from '../../Effects/ParticleTheme';

const CustomLanding = () => {
  const animationType = 'easeInOutQuart';
  return (
  // useEffect(() => {
  //   anime({
  //     targets: '.top',
  //     translateY: '100%',
  //     translateX: '50%',
  //     duration: 800,
  //   });
  //   return () => {
  //   };
  // }, []);
    <Element name="landing" className="wrapper">
      <Anime
        translateX="100%"
        translateY="50%"
        duration="1000"
        easing={animationType}
      >
        <div className="rectangle top" />
      </Anime>
      <div className="empty" />
      <div className="empty" />
      <div className="empty" />
      <div className="text">
        <div className="intro">Hello, I'm</div>
        <div className="name">Aniruddha Patil</div>
        <div className="description">I build to simplify</div>
        <div className="media">
          <a href="mailto:anipatil@iu.edu" target="_blank" rel="noreferrer">
            <div className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/aniruddhavpatil/" target="_blank" rel="noreferrer">
            <div className="icon">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
          </a>
          <a href="https://github.com/aniruddhavpatil" target="_blank" rel="noreferrer">
            <div className="icon">
              <FontAwesomeIcon icon={faGithub} />
            </div>
          </a>

        </div>

        {/* <div className="info">I'm a graduate student pursuing a Master's in Computer Science at Indiana University Bloomington</div> */}
      </div>
      <div className="empty" />
      <div className="empty" />
      <div className="empty" />
      <Anime
        translateX="-100%"
        translateY="-50%"
        duration="1000"
        easing={animationType}
      >
        <div className="rectangle bottom" />
      </Anime>
    </Element>
  );
};

export default CustomLanding;
