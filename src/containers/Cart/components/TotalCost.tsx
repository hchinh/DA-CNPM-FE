import { User } from 'interfaces';
import React from 'react';

interface Props {
  user?: User;
  handleCheckout: () => void;
}

export const TotalCost: React.FC<Props> = ({ user, handleCheckout }) => {
  return (
    <>
      <div className='customer-info'>
        <span>Giao tới</span>
        <div className='customer-info-detail'>
          <span className='customer-name'>{user?.name}</span>
          <span className='customer-phone'>{user?.phoneNumber}</span>
        </div>
        <div className='customer-address'>{user?.address}</div>
      </div>
    </>
  );
};
