import React, { useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import SearchInput from './../small_components/SearchInput';

const SearchBox = () => {
  const history = useHistory();

  const handleSearch = search => {
    history.push(`/items?search=${search}`);
  };

  return (
    <div className='input-group'>
      <SearchInput onSubmit={handleSearch} />
    </div>
  );
};

export default withRouter(SearchBox);
