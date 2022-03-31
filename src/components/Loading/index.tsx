import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import { LoadingWrapper } from './styles';

export const Loading = () => {
  return (
    <LoadingWrapper>
      <div className='sweet_loading'>
        <TailSpin color={'#F5A623'} height={40} width={40} />
        <span>Please Wait</span>
      </div>
    </LoadingWrapper>
  );
};
