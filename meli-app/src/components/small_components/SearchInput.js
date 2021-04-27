import React, { useState } from 'react';
import SearchLogoImage from '../../misc/images/ic_Search.png';
import SearchLogoImage2x from '../../misc/images/ic_Search@2x.png';

const SearchInput = ({ onSubmit, startValue }) => {
  const [value, setValue] = useState(startValue);

  const placeHolder = 'Nunca dejes de buscar';

  const handleChange = e => {
    setValue(e.target.value);
  };

  const onSearchClick = () => onSubmit(value);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <React.Fragment>
      <form className='form-input' onSubmit={handleSubmit}>
        <input
          type='text'
          className='input'
          placeholder={placeHolder}
          onChange={handleChange}
          value={value || ''}
        ></input>
      </form>
      <button className='btn btn--grey' onClick={onSearchClick}>
        <picture className='icon-container'>
          <img
            className='icon--small'
            src={SearchLogoImage}
            srcSet={SearchLogoImage2x}
            alt=''
          ></img>
        </picture>
      </button>
    </React.Fragment>
  );
};

export default SearchInput;
