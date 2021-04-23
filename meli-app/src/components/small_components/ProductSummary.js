import React from 'react';

const ProductSummary = ({ reversed }) => {
  return (
    <article className={`product-summary ${reversed ? 'product-summary--reversed' : ''}`}>
      <div className='product-summary__content'>
        <h3 className='product-summary__heading'>
          <span className='product-summary__money-symbol'>$</span>
          1.545
        </h3>
        <p className='product-summary__description'>
          Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!{' '}
        </p>
      </div>
    </article>
  );
};

export default ProductSummary;
