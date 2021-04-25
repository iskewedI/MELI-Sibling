import React from 'react';
import ProductSummary from './ProductSummary';

const ProductHero = ({ pricePosition = 'top', imageSize = 'small' }) => {
  return (
    <div className='hero'>
      <img
        className={`hero__image--${imageSize} product-result__image`}
        src='https://http2.mlstatic.com/D_NQ_NP_908744-MLA44099561456_112020-V.webp'
        srcSet=''
        alt='Imagen del producto'
      />
      <div className='hero__content'>
        <ProductSummary reversed={pricePosition === 'bottom' ? true : false} />
      </div>
    </div>
  );
};

export default ProductHero;
