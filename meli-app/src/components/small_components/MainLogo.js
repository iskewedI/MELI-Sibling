import React from 'react';
import LogoML from '../../misc/images/Logo_ML.png';
import LogoML2x from '../../misc/images/Logo_ML@2x.png';

const Logo = () => {
  return (
    <picture>
      <img src={LogoML} srcSet={LogoML2x} alt=''></img>
    </picture>
  );
};

export default Logo;
