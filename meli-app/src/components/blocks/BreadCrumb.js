import React from 'react';

const BreadCrumb = ({ items }) => {
  return (
    <ul className='list list--inline list--breadcrumb'>
      {items.map((item, index) => (
        <li key={item + index} className='list__item'>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default BreadCrumb;
