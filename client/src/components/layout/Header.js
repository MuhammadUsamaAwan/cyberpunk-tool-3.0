import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <div className='text-center'>
        <h1 className='heading-primary'>
          <span className='heading-primary--main'>
            Build planner for cyberpunk 2077
          </span>
          <span className='heading-primary--sub'>
            Craft, optimize, save & share your builds
          </span>
          <span className='heading-primary--sub mb-small'>
            browse & favorite other people's submitted builds
          </span>
        </h1>
        <Link to='/planner' className='btn btn--primary btn--start'>
          Build planner_
        </Link>
        <Link to='/builds' className='btn btn--secondary btn--end ml-small'>
          Browse builds_
        </Link>
      </div>
    </header>
  );
};

export default Header;
