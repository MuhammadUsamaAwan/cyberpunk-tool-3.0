import React from 'react';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navigation'>
      <Logo className='navigation__logo' />
      <input type='checkbox' className='navigation__checkbox' id='nav-toggle' />
      <label className='navigation__icon' htmlFor='nav-toggle' />
      <ul className='navigation__link'>
        <li>
          <NavLink exact to='/' activeClassName='navigation__active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/planner' activeClassName='navigation__active'>
            Planner
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/builds' activeClassName='navigation__active'>
            Builds
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/profile' activeClassName='navigation__active'>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/login' activeClassName='navigation__active'>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
