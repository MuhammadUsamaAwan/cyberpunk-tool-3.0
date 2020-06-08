import React from 'react';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <div className='footer__logo-box'>
          <Logo className='footer__logo' />
          <p>CyberpunkTool is a site dedicated to provide tools,</p>
          <p> calculators and build planner for Cyberpunk 2077.</p>
        </div>
        <ul className='footer__links'>
          <li>
            <a href='#!'>Home</a>
          </li>
          <li>
            <a href='#!'>Planner</a>
          </li>
          <li>
            <a href='#!'>Builds</a>
          </li>
          <li>
            <a href='#!'>Terms</a>
          </li>
          <li>
            <a href='#!'>Privacy</a>
          </li>
        </ul>
      </div>
      <p>&copy; CyberpunkTool 2020. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
