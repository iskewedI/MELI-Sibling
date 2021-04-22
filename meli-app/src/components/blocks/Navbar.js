import React from 'react';
import MainLogo from '../small_components/MainLogo';
import SearchBox from './SearchBox';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav__brand'>
        <MainLogo />
      </div>
      <div className='nav__search'>
        <SearchBox />
      </div>
    </div>
  );
};

export default Navbar;
