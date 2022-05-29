import { Button, Form, Input, notification } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import commentApi from 'api/commentApi';
import React from 'react';
interface Props {
  productId: number;
}

export const AddComment: React.FC<Props> = ({ productId }) => {
  const customerId = Number(localStorage.getItem('id'));

  const handleOnFinish = async (values: any) => {
    try {
      await commentApi.create({ ...values, productId, customerId });
      notification.success({
        message: `Thêm bình luận thành công`,
        placement: 'bottomLeft',
      });
      window.location.reload();
    } catch (error) {
      notification.success({
        message: `Thất bại !!!!`,
        placement: 'bottomLeft',
      });
    }
  };
  return (
    <div>
      <Form onFinish={handleOnFinish}>
        <Form.Item
          name='comment'
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập bình luận trước khi thêm',
            },
          ]}
        >
          <TextArea placeholder='Nhập bình luận của bạn.....' id='textarea'></TextArea>
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Thêm bình luận
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
