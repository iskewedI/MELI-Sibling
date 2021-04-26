import React from 'react';

const ProductHero = ({ imageUrl, price, title }) => {
  return (
    <div className='hero'>
      <img
        className={`hero__image--small product-result__image`}
        src={imageUrl}
        alt='Imagen del producto'
      />
      <div className='hero__content'>
        <article className={`product-summary`}>
          <div className='product-summary__content'>
            <h3 className='product-summary__heading'>
              <span className='product-summary__money-symbol'>$</span>
              {price}
            </h3>
            <p className='product-summary__description'>{title}</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProductHero;
