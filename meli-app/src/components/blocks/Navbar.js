import React from 'react';
import { useHistory } from 'react-router-dom';
import MainLogo from '../small_components/MainLogo';
import SearchBox from './SearchBox';

const Navbar = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  return (
    <div className='nav'>
      <button className='btn btn--transparent nav__brand' onClick={handleClick}>
        <MainLogo />
      </button>
      <div className='nav__search'>
        <SearchBox />
      </div>
    </div>
  );
};

export default Navbar;
