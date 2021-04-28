import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import BreadCrumb from './../blocks/BreadCrumb';
import { getProductDetail, getProductCategories } from './../../api/backend';
import Loading from './../small_components/Loading';

const ProductDetail = () => {
  const [results, setResults] = useState();
  const [categories, setCategories] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (!id) return <Redirect to='/' />;

    if (!results) {
      const handleSearch = async () => {
        const searchResults = await getProductDetail(id);

        setResults(searchResults);
      };

      handleSearch();
    }

    if (!categories) {
      const handleSearch = async () => {
        const categoriesResult = await getProductCategories(id);

        setCategories(categoriesResult);
      };

      handleSearch();
    }
  }, [id, results, setResults, categories, setCategories]);

  if (!results) return <Loading width='64' />;

  const product = results.items;

  const { decimals, currency } = product.price;

  const currencyFormatter = new Intl.NumberFormat('es-ES', {
    style: 'decimal',
    //The 'minimum' is needed to prevent an internal error -> See https://github.com/andyearnshaw/Intl.js/issues/123
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    currency,
  });

  const numberInParts = currencyFormatter.formatToParts(decimals);

  const price = currencyFormatter.format(decimals);

  return (
    <React.Fragment>
      <div className='product-detail'>
        {categories && <BreadCrumb items={categories} />}
        <div className='product-detail__content'>
          <div className='hero'>
            <img
              className='hero__image hero__image--big product-result__image'
              src={product.picture}
              srcSet=''
              alt='Imagen del producto'
            />
            <div className='hero__content'>
              <p className='product-detail__status'>
                {product.condition === 'new' ? 'Nuevo' : 'Usado'} -{' '}
                {product.sold_quantity} vendido{product.sold_quantity === 1 ? '' : 's'}
              </p>
              <div>
                <article className='product-summary'>
                  <div className='product-summary__content'>
                    <p className='product-summary__description'>{product.title}</p>
                    <h3 className='product-summary__heading'>
                      <span className='product-summary__money-symbol'>$</span>
                      {price}
                      <span className='product-summary__price-decimals'>
                        {numberInParts[numberInParts.length - 1].value}
                      </span>
                    </h3>
                  </div>
                </article>
              </div>
              <button className='btn btn--medium btn--primary'>Comprar</button>
            </div>
          </div>
          <div className='product-description'>
            <h2 className='product-description__heading'>Descripción del producto</h2>
            <p className='product-description__content'>{product.description}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductDetail;
