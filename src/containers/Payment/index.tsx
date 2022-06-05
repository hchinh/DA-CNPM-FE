import { Modal, notification } from 'antd';
import { orderApi } from 'api/orderApi';
import { userApi } from 'api/userApi';
import { useAppSelector } from 'app/hook';
import { Footer } from 'components/Footer';
import NavBar from 'components/Header';
import { Loading } from 'components/Loading';
import { PaymentMethod, PaymentPayload, Status, User } from 'interfaces';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DetailOrder } from './components/DetailOrder';
import { PayPalPayment } from './components/Paypal';
import { PaymentStyles } from './styles';

export const Payment = () => {
  const navigate = useNavigate();
  const loggedInUser = useAppSelector((state) => state.auth.currentUser);
  const [user, setUser] = useState<User>();
  const cartList = useAppSelector((state) => state.cart.cartItems);
  const [loading, setLoading] = useState(true);
  type Order = Omit<PaymentPayload, 'paymentMethod' | 'status'>;
  const [order, setOrder] = useState<Order>();

  useEffect(() => {
    (async () => {
      if (loggedInUser) {
        const user = await userApi.getById(Number(loggedInUser.id));
        setUser(user);
        const order: Order = {
          customerId: user!.id,
          totalCost: cartList.reduce((total, item) => total + item.quantity + item.salePrice, 0),
          address: user!.address,
        };
        setOrder(order);
        setLoading(false);
      }
    })();
  }, [loggedInUser]);

  const setOrderStatusAndMethodPayment = (paymentMethod: PaymentMethod, status: Status) => {
    return {
      paymentMethod,
      status,
    };
  };
  const handleClickOnCashPayment = () => {
    Modal.confirm({
      title: 'Thông báo',
      content: 'Bạn đồng ý  thanh toán?',
      onOk: async () => {
        const orderByCash = {
          ...order,
          ...setOrderStatusAndMethodPayment(PaymentMethod.CASH, Status.PENDING),
        };
        await orderApi.payment(orderByCash as PaymentPayload);
        notification['success']({
          message: 'Đặt hàng thành công!',
          placement: 'topRight',
        });
        navigate('/order');
      },
    });
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <PaymentStyles>
          <NavBar />
          <div className='container'>
            <div className='container__navbar'>
              <h2>Chọn hình thức thanh toán:</h2>
            </div>
            <div className='content'>
              <div className='payment-method'>
                <PayPalPayment order={order as any} />

                <button className='payment-button' id='cash' onClick={handleClickOnCashPayment}>
                  Thanh toán khi nhận hàng
                </button>
              </div>
              <div className='detail-content'>
                <DetailOrder order={cartList} user={user} />
              </div>
            </div>
          </div>
          <Footer />
        </PaymentStyles>
      )}
    </>
  );
};
