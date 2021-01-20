import React from 'react';
import './ParticleTheme.scss';
import Particles from 'react-particles-js';
import ParticleSettings from './particles.json';

const CustomParticleTheme = () => (
  <Particles
    className="particles-js"
    params={ParticleSettings}
  />
);

export default CustomParticleTheme;
