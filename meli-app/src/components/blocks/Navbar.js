import React from 'react';
import { useHistory } from 'react-router-dom';
import MainLogo from '../small_components/MainLogo';
import SearchBox from './SearchBox';

const Navbar = () => {
  const history = useHistory();

  const handleLogoClick = () => {
    history.push('/');
    window.location.reload();
  };

  return (
    <div className='nav'>
      <button className='btn btn--transparent nav__brand' onClick={handleLogoClick}>
        <MainLogo />
      </button>
      <div className='nav__search'>
        <SearchBox />
      </div>
    </div>
  );
};

export default Navbar;
