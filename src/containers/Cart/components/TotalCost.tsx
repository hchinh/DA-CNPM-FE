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
  const [isCheckout, setIsCheckout] = useState(false);
  const selectedList = useAppSelector((state) => state.cart.selectedList);

  useEffect(() => {
    if (selectedList.length) {
      const totalCost = selectedList.reduce((total: number, cur: CartItem) => {
        total += cur.salePrice * cur.quantity;
        return total;
      }, 0);
      setTotalCost(totalCost);
      setIsCheckout(true);
    } else {
      setTotalCost(0);
      setIsCheckout(false);
    }
  }, [selectedList]);

  const handleCheckoutButtonClick = () => {
    if (isCheckout) {
      navigate('/checkout/payment');
    } else {
      Modal.info({
        title: 'Thông báo',
        content: 'Vui lòng chọn ít nhất 1 sản phẩm trước khi thanh toán.',
      });
    }
  };

  return (
    <DetailCartStyles>
      <div className='total-cost'>
        <div className='total-cost-item customer-info'>
          <span className='block_header-title'>Giao tới</span>
          <div className='customer-info-detail'>
            <span className='customer-name'>{user?.name}</span>
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
        <button onClick={handleCheckoutButtonClick}>MUA HÀNG</button>
      </div>
    </DetailCartStyles>
  );
};
