import React from 'react';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <div className='footer__logo-box'>
          <Link to='/'>
            <Logo className='footer__logo' />
          </Link>
          <p>CyberpunkTool is a site dedicated to provide tools,</p>
          <p> calculators and build planner for Cyberpunk 2077.</p>
        </div>
        <ul className='footer__links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/planner'>Planner</Link>
          </li>
          <li>
            <Link to='/builds'>Builds</Link>
          </li>
          <li>
            <Link to='/terms'>Terms</Link>
          </li>
          <li>
            <Link to='/privacy'>Privacy</Link>
          </li>
        </ul>
      </div>
      <p>&copy; CyberpunkTool 2020. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
