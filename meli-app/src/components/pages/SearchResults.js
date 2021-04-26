import React, { useEffect, useState } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import BreadCrumb from '../blocks/BreadCrumb';
import ProductList from '../blocks/ProductList';
import { getSearchResults } from './../../api/backend';

const SearchResults = () => {
  const [results, setResults] = useState(null);

  const urlParams = new URLSearchParams(useLocation().search);
  const search = urlParams.get('search');

  useEffect(() => {
    if (!search) return <Redirect to='/' />;

    if (!results || results.lastSearch !== search) {
      const handleSearch = async () => {
        const searchResults = await getSearchResults(search);

        searchResults.lastSearch = search;

        setResults(searchResults);
      };

      handleSearch();
    }
  }, [search, results, setResults]);

  if (!results) return <div>Cargando...</div>;

  console.log(results.categories);

  return (
    <div className='search-results'>
      <div className='search-results__nav'>
        <BreadCrumb items={results.categories} />
      </div>
      <ProductList products={results.items} />
    </div>
  );
};

export default SearchResults;
