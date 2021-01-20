import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import Anime, { anime } from 'react-anime';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import './index.scss';
import Landing from '../components/Sections/Landing';
import About from '../components/Sections/About';

import Navbar from '../components/Navbar';
import Experience from '../components/Sections/Experience';
import Contact from '../components/Sections/Contact';

const IndexPage = () => {
  const animationType = 'easeInOutQuart';

  return (

    <Layout>
      {/* <div>
        <div className="border-top">
          <Anime
            translateX="0vh"
            translateY="0vh"
            duration="1000"
            easing={animationType}
          >
            <div className="rectangle top" />
          </Anime>
        </div>
        <div className="border-bottom">
          <Anime
            translateX="0vh"
            translateY="0vh"
            duration="1000"
            easing={animationType}
          >
            <div className="rectangle bottom" />
          </Anime>
        </div>
      </div> */}
      <SEO title="Home" />
      <Navbar />
      <Landing />
      <About id="about" />
      <Experience />
      <Contact />

    </Layout>
  );
};
export default IndexPage;
