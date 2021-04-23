import React from 'react';
import ProductSummary from './ProductSummary';
import ProductHero from './ProductHero';

const ProductResult = ({ hasShipping }) => {
  return (
    <article
      className={`grid grid--cols-3 product-result ${
        hasShipping ? 'product-result--shipping' : ''
      }`}
    >
      <ProductHero />
      <div className='product-result_location'>Capital Federal</div>
    </article>
  );
};

export default ProductResult;
