import React from 'react';
import Navbar from './components/blocks/Navbar';
import SearchResults from './components/pages/SearchResults';
import ProductSummary from './components/small_components/ProductSummary';
import BreadCrumb from './components/blocks/BreadCrumb';
import ProductResult from './components/small_components/ProductResult';
import ProductList from './components/blocks/ProductList';
import ProductDetail from './components/pages/ProductDetail';
import ProductHero from './components/small_components/ProductHero';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <ProductDetail />
    </React.Fragment>
  );
};

export default App;
