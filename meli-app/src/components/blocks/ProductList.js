import React from 'react';
import ProductResult from '../small_components/ProductResult';

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map(product => (
        <div key={product.id} className='product-container'>
          <ProductResult data={product} />
          <hr className='product-list__separator' />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
