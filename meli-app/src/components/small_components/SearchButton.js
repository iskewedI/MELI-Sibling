import React from 'react';
import SearchLogoImage from '../../misc/images/ic_Search.png';
import SearchLogoImage2x from '../../misc/images/ic_Search@2x.png';

const SearchButton = () => {
  return (
    <button className='btn btn--grey'>
      <picture className='icon-container'>
        <img
          className='icon--small'
          src={SearchLogoImage}
          srcSet={SearchLogoImage2x}
          alt=''
        ></img>
      </picture>
    </button>
  );
};

export default SearchButton;
