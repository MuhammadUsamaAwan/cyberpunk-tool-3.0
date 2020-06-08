import React from 'react';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__text-box'>
        <h1 className='heading-primary'>
          <span className='heading-primary--main'>
            Build planner for cyberpunk 2077
          </span>
          <span className='heading-primary--sub'>
            Craft, optimize, save & share your builds
          </span>
          <span className='heading-primary--sub ml-small'>
            browse & favorite other people's submitted builds
          </span>
        </h1>
        <a href='#!' className='btn btn--primary btn--start'>
          Build planner_
        </a>
        <a href='#!' className='btn btn--secondary btn--end ml-small'>
          Browse builds_
        </a>
      </div>
    </header>
  );
};

export default Header;
