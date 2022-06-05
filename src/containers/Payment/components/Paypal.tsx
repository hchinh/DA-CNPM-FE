import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { orderApi } from 'api/orderApi';
import { Order, PaymentMethod, PaymentPayload, Status } from 'interfaces';
import React, { useState } from 'react';
import { Modal, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
interface Props {
  order: Order;
}
export const PayPalPayment: React.FC<Props> = ({ order }) => {
  const navigate = useNavigate();
  const exchangeRate = 23000;
  const clientId = process.env.REACT_APP_PAYPAL_CLIENT_ID;
  const [orderID, setOrderID] = useState(false);

  // creates a paypal order
  const createOrder = (data: any, actions: any) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: 'Order',
            amount: {
              currency_code: 'USD',
              value: (order.totalCost / exchangeRate).toFixed(2),
            },
          },
        ],
      })
      .then((orderID: any) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data: any, actions: any) => {
    return actions.order.capture().then(async function (details: any) {
      const orderByPaypal = {
        ...order,
        paymentMethod: PaymentMethod.CASH,
        status: Status.PAID,
      };
      await orderApi.payment(orderByPaypal as PaymentPayload);
      notification['success']({
        message: 'Đặt hàng thành công!',
        placement: 'topRight',
      });
      navigate('/order');
    });
  };

  //capture likely error
  const onError = (data: any, actions: any) => {
    notification['error']({
      message: 'Đặt hàng thất bại!',
      placement: 'topRight',
    });
  };

  return (
    <PayPalScriptProvider options={{ 'client-id': `${clientId}` }}>
      <PayPalButtons
        style={{ layout: 'horizontal' }}
        createOrder={createOrder}
        onApprove={onApprove}
      />
    </PayPalScriptProvider>
  );
};
