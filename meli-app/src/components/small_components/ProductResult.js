import React from 'react';
import ProductHero from './ProductHero';

const ProductResult = ({ data }) => {
  return (
    <article
      className={`grid grid--cols-3 product-result ${
        data.free_shipping ? 'product-result--shipping' : ''
      }`}
    >
      <ProductHero
        imageUrl={data.picture}
        price={data.price.decimals}
        title={data.title}
      />
      <div className='product-result_location'>Capital Federal</div>
    </article>
  );
};

export default ProductResult;
