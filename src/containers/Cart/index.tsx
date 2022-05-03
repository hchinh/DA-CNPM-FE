import { ExclamationCircleOutlined } from '@ant-design/icons';
import { unwrapResult } from '@reduxjs/toolkit';
import { Col, Modal, Row } from 'antd';
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

export const confirmDelete = () => {
  let isConfirmed = false;
  Modal.confirm({
    title: 'Xóa sản phẩm',
    centered: true,
    icon: <ExclamationCircleOutlined />,
    content: 'Bạn có muốn xóa sản phẩm đang chọn?',
    okText: 'Xác nhận',
    cancelText: 'Hủy',
    onOk: () => {
      isConfirmed = true;
    },
    onCancel: () => {
      isConfirmed = false;
    },
  });
  return isConfirmed;
};

export const Cart = () => {
  const dispatch = useAppDispatch();
  const loggedInUser = useAppSelector((state) => state.auth.currentUser);
  const [user, setUser] = useState<User>();

  const cartList = useAppSelector((state) => state.cart.cartItems);

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
  const handleCheckout = () => {};
  return (
    <CartStyles>
      <NavBar />
      <div className='container'>
        <h1>Giỏ Hàng</h1>
        <div>
          <Row>
            <Col span={16}>
              <DetailCart cartList={cartList} onChange={handleOnChange} onRemove={handleOnRemove} />
            </Col>
            <Col span={8}>
              <TotalCost user={user} handleCheckout={handleCheckout} />
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </CartStyles>
  );
};
