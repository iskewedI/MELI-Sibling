import React, { useEffect, useState } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import BreadCrumb from '../blocks/BreadCrumb';
import ProductList from '../blocks/ProductList';
import { getSearchResults } from './../../api/backend';

const SearchResults = () => {
  const [results, setResults] = useState(null);

  const urlParams = new URLSearchParams(useLocation().search);
  const search = urlParams.get('search');

  useEffect(async () => {
    if (!search) return <Redirect to='/' />;

    if (!results) {
      const searchResults = await getSearchResults(search);

      setResults(searchResults);
    }
  }, [results, setResults]);

  if (!results) return <div>Cargando...</div>;

  return (
    <div className='search-results'>
      <div className='search-results__nav'>
        <BreadCrumb />
      </div>
      <ProductList />
    </div>
  );
};

export default SearchResults;
