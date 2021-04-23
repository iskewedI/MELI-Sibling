import React from 'react';
import ProductSummary from './ProductSummary';

const ProductHero = () => {
  return (
    <div className='hero'>
      <img
        className='hero__image--small product-result__image'
        src='https://http2.mlstatic.com/D_NQ_NP_908744-MLA44099561456_112020-V.webp'
        srcSet=''
        alt='Imagen del producto'
      />
      <div className='hero__content'>
        <ProductSummary reversed={false} />
      </div>
    </div>
  );
};

export default ProductHero;
