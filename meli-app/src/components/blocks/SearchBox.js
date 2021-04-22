import React from 'react';
import SearchInput from './../small_components/SearchInput';
import SearchButton from '../small_components/SearchButton';

const SearchBox = () => {
  return (
    <div className='input-group'>
      <SearchInput />
      <SearchButton />
    </div>
  );
};

export default SearchBox;
