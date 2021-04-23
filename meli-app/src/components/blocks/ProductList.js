import React from 'react';
import ProductSummary from './../small_components/ProductSummary';

const ProductList = () => {
  return (
    <div>
      <ProductSummary shipping={true} />
      <ProductSummary />
      <ProductSummary shipping={true} />
      <ProductSummary />
    </div>
  );
};

export default ProductList;
