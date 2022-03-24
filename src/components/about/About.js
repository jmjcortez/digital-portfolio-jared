import React from 'react';

import './About.styles.css';

import jaredPhoto from '../../assets/images/jared.jpg';

const About = () => {
  return (
    <div className='about-container'>
      <h1>About the Artist</h1>
      <img className='photo' src={jaredPhoto} alt='photo' />
      <div className='about-text-container'>
        <span className='about-text'>Jared is born and raised in the Philippines and currently based in Sydney, Australia. His works and illustrations are mainly influenced by surrealism and psychedelia.</span>
      </div>
    </div>
  )
}

export default About