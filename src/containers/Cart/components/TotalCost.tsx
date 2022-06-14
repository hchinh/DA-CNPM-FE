import { EditOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { useAppSelector } from 'app/hook';
import { CartItem, User } from 'interfaces';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from 'utils/common';
import { DetailCartStyles } from './DetailCart/styles';

interface Props {
  user?: User;
}

export const TotalCost: React.FC<Props> = ({ user }) => {
  const navigate = useNavigate();
  const [totalCost, setTotalCost] = useState(0);
  const cartList = useAppSelector((state) => state.cart.cartItems);

  useEffect(() => {
    const totalCost = cartList.reduce((total: number, cur: CartItem) => {
      total += cur.salePrice * cur.quantity;
      return total;
    }, 0);
    setTotalCost(totalCost);
  }, [cartList]);

  return (
    <DetailCartStyles>
      <div className='total-cost'>
        <div className='total-cost-item customer-info'>
          <span className='block_header-title'>
            Giao tới
            <EditOutlined
              className='info-edit'
              onClick={() => {
                navigate('/profile');
              }}
            />
          </span>
          <div className='customer-info-detail'>
            <span className='customer-name'>{user?.userName}</span>
            <i></i>
            <span className='customer-phone'>{user?.phoneNumber}</span>
          </div>
          <div className='customer-address'>{user?.address}</div>
        </div>
        <div className='total-cost-item total-cost-detail'>
          <ul className='prices__items'>
            <li className='prices__item'>
              <div className='prices__text'>Tạm tính: </div>
              <div className='prices__value'>{formatPrice(totalCost)} </div>
            </li>
            <li className='prices__item'>
              <div className='prices__text'>Giảm giá: </div>
              <div className='prices__value'>{formatPrice(0)}</div>
            </li>
          </ul>
          <div className='prices__total'>
            <div className='prices__text'>Tổng tiền:</div>
            <div className='prices__value'>{formatPrice(totalCost)}</div>
          </div>
        </div>
        <button
          onClick={() => {
            navigate('/checkout/payment');
          }}
        >
          MUA HÀNG
        </button>
      </div>
    </DetailCartStyles>
  );
};
