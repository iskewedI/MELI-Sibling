import React from 'react';

const ProductSummary = ({ shipping = false }) => {
  return (
    <div>
      <article
        className={`grid grid--cols-3 product-summary ${
          shipping ? 'product-summary--shipping' : ''
        }`}
      >
        <img
          className='product-summary__image'
          src='https://http2.mlstatic.com/D_NQ_NP_908744-MLA44099561456_112020-V.webp'
          srcSet=''
          alt='Imagen del producto'
        />
        <div className='product-summary__content'>
          <h3 className='product-summary__heading'>
            <span className='product-summary__money-symbol'>$</span>
            1.545
          </h3>
          <p className='product-summary__description'>
            Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!
          </p>
        </div>
        <div className='product-summary_location'>Capital Federal</div>
      </article>
    </div>
  );
};

export default ProductSummary;
