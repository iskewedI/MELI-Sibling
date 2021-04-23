import React from 'react';
import ProductSummary from './../small_components/ProductSummary';

const ProductList = () => {
  return (
    <div>
      <div className='product-container'>
        <ProductSummary shipping={true} />
        <hr className='product-list__separator' />
      </div>

      <div className='product-container'>
        <ProductSummary />
        <hr className='product-list__separator' />
      </div>
      <div className='product-container'>
        <ProductSummary shipping={true} />
        <hr className='product-list__separator' />
      </div>
      <div className='product-container'>
        <ProductSummary />
        <hr className='product-list__separator' />
      </div>
    </div>
  );
};

export default ProductList;
