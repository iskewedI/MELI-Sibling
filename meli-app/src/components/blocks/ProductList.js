import React from 'react';
import ProductResult from '../small_components/ProductResult';

const ProductList = () => {
  return (
    <div>
      <div className='product-container'>
        <ProductResult shipping={true} />
        <hr className='product-list__separator' />
      </div>

      <div className='product-container'>
        <ProductResult />
        <hr className='product-list__separator' />
      </div>
      <div className='product-container'>
        <ProductResult shipping={true} />
        <hr className='product-list__separator' />
      </div>
      <div className='product-container'>
        <ProductResult />
        <hr className='product-list__separator' />
      </div>
    </div>
  );
};

export default ProductList;
