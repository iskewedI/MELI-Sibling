import BreadCrumb from '../blocks/BreadCrumb';
import ProductList from '../blocks/ProductList';

const SearchResults = () => {
  return (
    <div className='search-results'>
      <div className='search-results__nav'>
        <BreadCrumb />
      </div>
      <ProductList />
    </div>
  );
};

export default SearchResults;
