import { ShoppingCartOutlined } from '@ant-design/icons';
import { QuantityField } from 'components/form-controls/QuantityField';
import React from 'react';
import { useForm } from 'react-hook-form';
import { AddToCartWrapper } from './styles';

interface Props {
  onSubmit: (values: number) => void;
}

export const AddToCartForm: React.FC<Props> = ({ onSubmit }) => {
  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
  });
  const handleSubmit = async (values: { quantity: number }) => {
    if (onSubmit) {
      await onSubmit(values.quantity);
    }
  };
  return (
    <AddToCartWrapper>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className='title'>Số lượng</div>
        <QuantityField form={form} />
        <button type='submit' color='primary' className='btn_cart'>
          <i>
            <ShoppingCartOutlined />
          </i>
          Thêm vào giỏ hàng
        </button>
      </form>
    </AddToCartWrapper>
  );
};
