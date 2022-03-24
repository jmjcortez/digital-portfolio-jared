import React from 'react';

import './Contact.styles.css';

import email from '../../assets/images/email.png';
import ig from '../../assets/images/ig.png';


const Contact = () => {
  return (
    <div className='contact-container' data-testid='contact-container'>
      <h1 className='title'>Thank You!!!</h1>
      <div className='contact-content-container'>
        <div className='text-container'>
          <img src={email} alt='heart' className='logo' />
          <span>Contact Jared through his Instagram or email jmjcortez@gmail.com for commisions or prints</span>
        </div>
        <div className='text-container'>
          <img src={ig} alt='ig' className='logo' />
          <span>Follow Jared on his social media accounts</span>
          <span>Instagram: <a className='ig-link' href='https://www.instagram.com/jared.m.cortez'>@jared.m.cortez</a></span>
        </div>
      </div>
    </div>
  )
}

export default Contact