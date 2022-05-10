import { unwrapResult } from '@reduxjs/toolkit';
import { Col, Row, Skeleton } from 'antd';
import { userApi } from 'api/userApi';
import { useAppDispatch, useAppSelector } from 'app/hook';
import { Footer } from 'components/Footer';
import NavBar from 'components/Header';
import { CartPayLoad, User } from 'interfaces';
import React, { useEffect, useState } from 'react';
import { removeCartItem, removeCartItems, updateCartItem } from 'redux/cartSlice';
import { DetailCart } from './components/DetailCart';
import { TotalCost } from './components/TotalCost';
import { CartStyles } from './styles';

export const Cart = () => {
  const dispatch = useAppDispatch();
  const loggedInUser = useAppSelector((state) => state.auth.currentUser);
  const [user, setUser] = useState<User>();
  const cartList = useAppSelector((state) => state.cart.cartItems);
  const start = useAppSelector((state) => state.cart.start);

  useEffect(() => {
    (async () => {
      if (loggedInUser) {
        const user = await userApi.getById(Number(loggedInUser.id));
        setUser(user);
      }
    })();
  }, [loggedInUser]);

  const handleOnChange = async (value: CartPayLoad) => {
    const resultAction = await dispatch(
      updateCartItem({
        cartId: Number(value.id),
        payload: value,
      })
    );
    unwrapResult(resultAction);
  };
  const handleOnRemove = async (cartItemId: number | { ids: number[] }) => {
    let resultAction;
    if (typeof cartItemId === 'number') {
      resultAction = await dispatch(removeCartItem(cartItemId));
    } else {
      resultAction = await dispatch(removeCartItems(cartItemId));
    }
    unwrapResult(resultAction);
  };

  return (
    <CartStyles>
      <NavBar />
      <div className='container'>
        <h1>Giỏ Hàng</h1>
        {!start ? (
          cartList.length ? (
            <div>
              <Row>
                <Col span={18}>
                  <DetailCart
                    cartList={cartList}
                    onChange={handleOnChange}
                    onRemove={handleOnRemove}
                  />
                </Col>
                <Col span={6}>
                  <TotalCost user={user} />
                </Col>
              </Row>
            </div>
          ) : (
            <div className='cart-detail-empty'>
              <img
                src='https://salt.tikicdn.com/desktop/img/mascot@2x.png'
                alt=''
                style={{ width: '200px' }}
              />
              <p style={{ marginTop: '10px' }}>Không có sản phẩm trong giỏ hàng của bạn</p>
              <div style={{ paddingTop: '10px' }}>
                <a href='/'>Tiếp tục mua sắm</a>
              </div>
            </div>
          )
        ) : (
          <div>
            <Row>
              <Col span={15} style={{ marginRight: '20px' }}>
                <Skeleton />
                <Skeleton />
              </Col>
              <Col span={8}>
                <Skeleton />
              </Col>
            </Row>
          </div>
        )}
      </div>
      <Footer />
    </CartStyles>
  );
};
