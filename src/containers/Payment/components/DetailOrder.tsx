import { EditOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import { CartItem, User } from 'interfaces';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from 'utils/common';
import { DetailOrderStyles } from './styles';
interface Props {
  user?: User;
  order: CartItem[];
}

export const DetailOrder: React.FC<Props> = ({ user, order }) => {
  const navigate = useNavigate();
  const totalPrice = order.reduce((total, item) => total + item.salePrice * item.quantity, 0);
  return (
    <DetailOrderStyles>
      <div className='total-cost'>
        <div className='total-cost-item customer-info'>
          <span className='block_header-title'>Giao tới</span>
          <EditOutlined
            className='info-edit'
            onClick={() => {
              navigate('/profile');
            }}
          />
          <div className='customer-info-detail'>
            <span className='customer-name'>{user?.name || user?.userName}</span>
            <i></i>
            <span className='customer-phone'>{user?.phoneNumber}</span>
          </div>
          <div className='customer-address'>{user?.address}</div>
        </div>
        <div className='total-cost-item order-detail'>
          <div className='title'>
            <p>Đơn hàng ({order.length} sản phẩm)</p>
            <a href='/cart'>
              <EditOutlined />
              Sửa
            </a>
          </div>
          <div className='line'></div>
          {order.map((item) => (
            <>
              <div className='order-item'>
                <div className='product-item__info'>
                  <div className='product-thumnail'>
                    <Image
                      src={`data:image/png;base64,${item.productThumbnail}`}
                      alt={item.productName}
                    ></Image>
                  </div>
                  <div className='product-name'>{item.productName}</div>
                </div>
                <div className='product-item__price'>
                  <div className='product-quantity'>
                    <span className='label'>Số lượng:</span>
                    <span className='value'>{item.quantity}</span>
                  </div>
                  <div className='price'>
                    <span className='label'>Giá bán:</span>
                    <span className='value'>{formatPrice(item.salePrice)}</span>
                  </div>
                  <div className='total-price'>
                    <span className='label'>Tổng giá:</span>
                    <span className='value'>{formatPrice(item.quantity * item.salePrice)}</span>
                  </div>
                </div>
              </div>
              <div className='line'></div>
            </>
          ))}
          <div className='order-total'>
            <div className='order-total__label '>Tổng tiền:</div>
            <div className='order-total__value'>{formatPrice(totalPrice)}</div>
          </div>
        </div>
      </div>
    </DetailOrderStyles>
  );
};
