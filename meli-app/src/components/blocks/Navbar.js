import React from 'react';
import MainLogo from '../small_components/MainLogo';
import SearchBox from './SearchBox';

const Navbar = () => {
  return (
    <div className='nav'>
      <button className='btn btn--transparent nav__brand'>
        <MainLogo />
      </button>
      <div className='nav__search'>
        <SearchBox />
      </div>
    </div>
  );
};

export default Navbar;
