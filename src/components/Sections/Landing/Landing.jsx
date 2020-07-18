import React from 'react';
import './Landing.scss';
import Anime, { anime } from 'react-anime';
import { Element } from 'react-scroll';

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
        <div className="info">I'm a graduate student pursuing a Master's in Computer Science at Indiana University Bloomington</div>
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