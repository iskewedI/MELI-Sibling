import React from 'react';
import { Link } from 'react-router-dom';

const ProductHero = ({ id, imageUrl, price, title }) => {
  return (
    <div className='hero'>
      <Link to={`/items/${id}`} className='link btn btn--transparent'>
        <img
          className={`hero__image--small product-result__image`}
          src={imageUrl}
          alt='Imagen del producto'
          onClick={console.log('clicked')}
        />
      </Link>

      <div className='hero__content'>
        <article className={`product-summary`}>
          <div className='product-summary__content'>
            <h3 className='product-summary__heading'>
              <span className='product-summary__money-symbol'>$</span>
              {price}
            </h3>
            <Link to={`/items/${id}`} className='link product-summary__description'>
              {title}
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProductHero;
