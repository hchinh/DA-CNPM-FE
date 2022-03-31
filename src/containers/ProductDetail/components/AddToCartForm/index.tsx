import { ShoppingCartOutlined } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { QuantityField } from 'components/form-controls/QuantityField';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { AddToCartWrapper } from './styles';

interface Props {
  onSubmit?: (values: number) => void;
}
export const AddToCartForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <AddToCartWrapper>
      <>
        <div className='title'>Số lượng</div>
        <QuantityField />
        <button type='submit' color='primary' className='btn_cart'>
          <i>
            <ShoppingCartOutlined />
          </i>
          Add to Cart
        </button>
      </>
    </AddToCartWrapper>
  );
};