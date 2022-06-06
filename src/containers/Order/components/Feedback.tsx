import { Button, Col, Drawer, Form, Image, notification, Rate, Row } from 'antd';
import { feedbackApi } from 'api/commentApi';
import { Order } from 'interfaces';
import React from 'react';
interface Props {
  onClose: () => void;
  visible: boolean;
  order: Order;
}

export const Feedback: React.FC<Props> = ({ onClose, visible, order }) => {
  const handleOnFinish = async (values: any) => {
    try {
      const feedbackPayload = { ...values, customerId: order.customerId };
      console.log(values);
      await feedbackApi.create(feedbackPayload as any);
      notification.success({
        message: 'Đánh giá thành công',
      });
    } catch (error) {
      notification.error({
        message: 'Đánh giá thất bại',
      });
    }
  };
  return (
    <Drawer
      title='Đánh giá sản phẩm trong đơn hàng của bạn'
      visible={visible}
      onClose={onClose}
      width='50%'
    >
      <Row className='feedback-detail-title' style={{ textAlign: 'center', fontWeight: 'bold' }}>
        <Col span='2'>STT</Col>
        <Col span='12'>Sản phẩm</Col>
        <Col span='10'>Đánh giá</Col>
      </Row>
      {order.cartItems.map((item, index) => (
        <Row
          className='detail-order-item '
          style={{
            alignItems: 'center',
            textAlign: 'center',
            margin: '10px 0',
            padding: '10px 0',
            borderBottom: '1px solid #ccc',
          }}
        >
          <Col span='2'>{index + 1}</Col>
          <Col span='12'>
            <div className='detail-content' style={{ display: 'flex' }}>
              <div className='item__thumbnail' style={{ maxWidth: '50%' }}>
                {item.productThumbnail ? (
                  <Image
                    src={`data:image/png;base64,${item.productThumbnail}`}
                    alt={item.productName}
                  />
                ) : (
                  <Image src={'default.png'}></Image>
                )}
              </div>
              <div className='item__name'>
                <a href={`/product/${item.productId}`}>{item.productName}</a>
              </div>
            </div>
          </Col>
          <Col span='10'>
            <Form
              onFinish={handleOnFinish}
              initialValues={{
                rating: 5,
              }}
            >
              <Form.Item name='rating'>
                <Rate />
              </Form.Item>
              <Form.Item name='productId' initialValue={item.productId} hidden></Form.Item>
              <Form.Item>
                <Button type='primary' htmlType='submit'>
                  Gửi
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      ))}
    </Drawer>
  );
};
