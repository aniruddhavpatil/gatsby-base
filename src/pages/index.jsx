import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import './index.scss';
import Landing from '../components/Sections/Landing';
import About from '../components/Sections/About';

import Navbar from '../components/Navbar';
import MobileNavbar from '../components/MobileNavbar';
import Experience from '../components/Sections/Experience';
import Contact from '../components/Sections/Contact';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MobileNavbar />
    <Navbar />
    <Landing />
    <About id="about" />
    <Experience />
    <Contact />
  </Layout>
);
export default IndexPage;
