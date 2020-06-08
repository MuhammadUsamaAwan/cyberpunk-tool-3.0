import React from 'react';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

const Navbar = () => {
  return (
    <nav className='navigation'>
      <Logo className='navigation__logo' />
      <input type='checkbox' className='navigation__checkbox' id='nav-toggle' />
      <label className='navigation__icon' htmlFor='nav-toggle' />
      <ul className='navigation__link'>
        <li>
          <a href='#!' className='navigation__active'>
            Home
          </a>
        </li>
        <li>
          <a href='#!'>Planner</a>
        </li>
        <li>
          <a href='#!'>Builds</a>
        </li>
        <li>
          <a href='#!'>Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
