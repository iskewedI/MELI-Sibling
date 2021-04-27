import React from 'react';
import LoadingGif from '../../misc/images/loading.gif';

const Loading = ({ width = '32' }) => {
  return (
    <div className='loading'>
      <img src={LoadingGif} alt='' width={width}></img>
    </div>
  );
};

export default Loading;
