import React from 'react';
import ProductHero from './ProductHero';

const ProductResult = ({ data }) => {
  const { decimals, currency } = data.price;

  const currencyFormatter = new Intl.NumberFormat('es-ES', {
    style: 'decimal',
    //The 'minimum' is needed to prevent an internal error -> See https://github.com/andyearnshaw/Intl.js/issues/123
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    currency,
  });

  const price = currencyFormatter.format(decimals);

  return (
    <article
      className={`grid grid--cols-3 product-result ${
        data.free_shipping ? 'product-result--shipping' : ''
      }`}
    >
      <ProductHero
        id={data.id}
        imageUrl={data.picture}
        price={price}
        title={data.title}
      />
      <div className='product-result_location'>Capital Federal</div>
    </article>
  );
};

export default ProductResult;
