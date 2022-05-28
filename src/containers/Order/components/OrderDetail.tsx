import { Button, Col, Image, Modal, notification, Row } from 'antd';
import { Order, PaymentMethod, Status } from 'interfaces';
import React, { useState } from 'react';
import { formatDate } from 'utils/common';
import { OrderDetailStyles } from './styles';

interface Props {
  orders: Order[];
}
export const OrderDetail: React.FC<Props> = ({ orders }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [orderCancel, setOrderCancel] = useState<Order>();
  const checkCancelOrder = (orderItem: Order) => {
    return (
      String(orderItem.paymentMethod) === PaymentMethod[0] && String(orderItem.status) === Status[0]
    );
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async (order: any) => {
    const cancelForm: Order = {
      ...order,
      status: String(Status[3]),
    };
    console.log(cancelForm);
    try {
      //await orderApi.payment(cancelForm);
      notification.success({ message: 'Hủy đơn hàng thành công.' });
    } catch (error) {
      notification.error({ message: 'Hủy đơn hàng thất bại. Vui lòng thử lại!!' });
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <OrderDetailStyles>
      <div className='container'>
        <h1 className='order__title'>ĐƠN HÀNG CỦA BẠN</h1>
        <div className='nav__title'>
          <Row>
            <Col span={1}>STT</Col>
            <Col span={13}>Đơn hàng</Col>
            <Col span={3}>Ngày đặt hàng</Col>
            <Col span={3}>Tổng tiền</Col>
            <Col span={2}>Trạng thái</Col>
            <Col span={2}>Hủy đơn hàng</Col>
          </Row>
        </div>
        <div className='orders_content'>
          {orders.map((order, index) => (
            <Row className='orders_content-item'>
              <Col span={1}>{index + 1}</Col>
              <Col span={13}>
                <div className='detail-order-item'>
                  {order.cartItems.map((item) => (
                    <div className='detail-content'>
                      <div className='item__thumbnail'>
                        {item.productThumbnail ? (
                          <Image
                            src={`data:image/png;base64,${item.productThumbnail}`}
                            alt={item.productName}
                          ></Image>
                        ) : (
                          <Image src={'default.png'}></Image>
                        )}
                      </div>
                      <div className='item__name'>
                        <a href={`/product/${item.productId}`}>{item.productName}</a>
                      </div>
                      <div className='quantity'>x{item.quantity}</div>
                    </div>
                  ))}
                </div>
              </Col>
              <Col span={3}>{formatDate(order.createdDate)}</Col>
              <Col span={3} style={{ fontWeight: 'bold', color: '#1890ff' }}>
                {order.totalCost}
              </Col>
              <Col span={2}>{order.status}</Col>
              {checkCancelOrder(order) ? (
                <Col span={2}>
                  <Button
                    danger
                    onClick={() => {
                      setOrderCancel(order);
                      showModal();
                    }}
                  >
                    Hủy
                  </Button>
                </Col>
              ) : (
                ''
              )}
            </Row>
          ))}
        </div>
      </div>
      <Modal
        title='Hủy đơn hàng'
        className='cancel-modal'
        visible={isModalVisible}
        onOk={() => {
          handleOk(orderCancel);
          setIsModalVisible(false);
        }}
        onCancel={handleCancel}
      >
        Bạn chắc chắn muốn hủy đơn hàng này ?
      </Modal>
    </OrderDetailStyles>
  );
};
