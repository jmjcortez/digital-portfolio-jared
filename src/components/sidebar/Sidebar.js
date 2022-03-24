import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.styles.css';

const Sidebar = ({ showSideBar }) => {
  return (
    <div>
    {
      showSideBar ? (
        <div className="sidebar" data-testid='sidebar'>
          <span className="title">Jared <br/> Cortez</span>
          <Link to='/' className="links">
            <div className='link-text'>illustrations</div>
          </Link>
          <Link to='/contact' className="links">
            <div className='link-text'>contact/insta</div>
          </Link>
          <Link to='/about' className="links">
            <div className='link-text'>about</div>        
          </Link>
          <div className="footer">
            <span className="footer-text">All images copyright ©</span>
            <span className="footer-text">Jared Cortez, 2022</span>
            <span className="footer-text">All rights reserved</span>
          </div>
        </div>
      ) : (
        <div data-testid='empty-div'></div>
      )
      
    }
    </div>
  )
}

export default Sidebar;