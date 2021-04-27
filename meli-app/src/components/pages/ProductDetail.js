import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import BreadCrumb from './../blocks/BreadCrumb';
import { getProductDetail } from './../../api/backend';
import Loading from './../small_components/Loading';

const ProductDetail = () => {
  const [results, setResults] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (!id) return <Redirect to='/' />;

    if (!results || results.lastSearch !== id) {
      setResults(null);

      const handleSearch = async () => {
        const searchResults = await getProductDetail(id);

        searchResults.lastSearch = id;

        setResults(searchResults);
      };

      handleSearch();
    }
  }, [id, results, setResults]);

  if (!results) return <Loading width='64' />;

  const product = results.items;

  return (
    <React.Fragment>
      <div className='product-detail'>
        <BreadCrumb items={['1']} />
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
                {product.sold_quantity} vendido{product.sold_quantity > 1 ? 's' : ''}
              </p>
              <div>
                <article className='product-summary'>
                  <div className='product-summary__content'>
                    <p className='product-summary__description'>{product.title}</p>
                    <h3 className='product-summary__heading'>
                      <span className='product-summary__money-symbol'>$</span>
                      {product.price.decimals}
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
