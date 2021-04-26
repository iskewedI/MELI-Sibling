import React from 'react';
import { useLocation } from 'react-router-dom';
import { withRouter, useHistory } from 'react-router-dom';
import SearchInput from './../small_components/SearchInput';

const SearchBox = () => {
  const history = useHistory();

  const urlParams = new URLSearchParams(useLocation().search);
  const search = urlParams.get('search');

  const handleSearch = search => {
    history.push(`/items?search=${search}`);
  };

  return (
    <div className='input-group'>
      <SearchInput onSubmit={handleSearch} startValue={search} />
    </div>
  );
};

export default withRouter(SearchBox);
