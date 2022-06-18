import { Button, Col, Drawer, Image, Modal, notification, Rate, Row } from 'antd';
import { orderApi } from 'api/orderApi';
import { CancelPayload, Order, PaymentMethod, Status } from 'interfaces';
import React, { useState } from 'react';
import { formatDate, formatOrderStatus } from 'utils/common';
import { number } from 'yup';
import { Feedback } from './Feedback';
import { OrderDetailStyles } from './styles';

interface Props {
  orders: Order[];
  customerId: number;
  onRefresh: () => void;
}
export const OrderDetail: React.FC<Props> = ({ orders, customerId, onRefresh }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [orderCancel, setOrderCancel] = useState<Order>();
  const [orderFeedback, setOrderFeedback] = useState<Order>(orders[0]);
  const checkCancelOrder = (orderItem: Order) => {
    return (
      String(orderItem.paymentMethod) === PaymentMethod[0] && String(orderItem.status) === Status[0]
    );
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async (orderId: number) => {
    const cancelForm: CancelPayload = {
      userId: customerId,
      status: Status.CANCELLED,
    };
    try {
      await orderApi.cancel(orderId, cancelForm);
      notification.success({ message: 'Hủy đơn hàng thành công.' });
      onRefresh();
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
            <Col span={11}>Đơn hàng</Col>
            <Col span={3}>Ngày đặt hàng</Col>
            <Col span={3}>Tổng tiền</Col>
            <Col span={2}>Trạng thái</Col>
            <Col span={2}>Hủy đơn hàng</Col>
            <Col span={2}>Đánh giá</Col>
          </Row>
        </div>
        <div className='orders_content'>
          {orders.map((order, index) => (
            <Row className='orders_content-item'>
              <Col span={1}>{index + 1}</Col>
              <Col span={11}>
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
              <Col span={2}>{formatOrderStatus(String(order.status))}</Col>
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
                <Col span={2}></Col>
              )}
              <Col span={2}>
                {String(order.status) === Status[1] ? (
                  <Button
                    type='primary'
                    onClick={() => {
                      setOrderFeedback(order);
                      setDrawerVisible(true);
                    }}
                  >
                    Đánh giá
                  </Button>
                ) : (
                  ''
                )}
              </Col>
              <Feedback
                order={orderFeedback}
                onClose={() => {
                  setDrawerVisible(false);
                }}
                visible={drawerVisible}
              />
            </Row>
          ))}
        </div>
      </div>

      <Modal
        title='Hủy đơn hàng'
        className='cancel-modal'
        visible={isModalVisible}
        onOk={() => {
          handleOk(orderCancel!.id);
          setIsModalVisible(false);
        }}
        onCancel={handleCancel}
      >
        Bạn chắc chắn muốn hủy đơn hàng này ?
      </Modal>
    </OrderDetailStyles>
  );
};
