import React from 'react';
import './Landing.scss';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const CustomLanding = () => (
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
  <Element className="landing">

    <div className="wrapper">
      <div className="text">
        <div className="intro">Hello, I'm</div>
        <div className="name">Aniruddha Patil</div>
        <div className="description">I build to simplify</div>
        <div className="media">
          <div className="icon">
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faGithub} />
          </div>

        </div>

        {/* <div className="info">I'm a graduate student pursuing a Master's in Computer Science at Indiana University Bloomington</div> */}
      </div>
    </div>
  </Element>
);

export default CustomLanding;
