import React from 'react';
import { useParams } from 'react-router-dom';
import ProductResult from '../small_components/ProductResult';
import ProductHero from '../small_components/ProductHero';
import ProductSummary from '../small_components/ProductSummary';
import BreadCrumb from './../blocks/BreadCrumb';

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <React.Fragment>
      <div className='product-detail'>
        <BreadCrumb />
        <div className='product-detail__content'>
          <div className='hero'>
            <img
              className='hero__image hero__image--big product-result__image'
              src='https://http2.mlstatic.com/D_NQ_NP_908744-MLA44099561456_112020-V.webp'
              srcSet=''
              alt='Imagen del producto'
            />
            <div className='hero__content'>
              <p className='product-detail__status'>Nuevo - 234 vendidos</p>
              <div>
                <article className='product-summary'>
                  <div className='product-summary__content'>
                    <p className='product-summary__description'>
                      Deco Reverse Sombrero Oxford
                    </p>
                    <h3 className='product-summary__heading'>
                      <span className='product-summary__money-symbol'>$</span>
                      1.545
                    </h3>
                  </div>
                </article>
              </div>
              <button className='btn btn--medium btn--primary'>Comprar</button>
            </div>
          </div>
          <div className='product-description'>
            <h2 className='product-description__heading'>Descripción del producto</h2>
            <p className='product-description__content'>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos
              de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias
              desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la
              imprenta) desconocido usó una galería de textos y los mezcló de tal manera
              que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años,
              sino que tambien ingresó como texto de relleno en documentos electrónicos,
              quedando esencialmente igual al original. Fue popularizado en los 60s con la
              creación de las hojas "Letraset", las cuales contenian pasajes de Lorem
              Ipsum, y más recientemente con software de autoedición, como por ejemplo
              Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductDetail;
