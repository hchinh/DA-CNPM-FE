import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { unwrapResult } from '@reduxjs/toolkit';
import { InputNumber, Popconfirm } from 'antd';
import { useAppDispatch } from 'app/hook';
import { CartItem, CartPayLoad } from 'interfaces';
import React, { useRef, useState } from 'react';
import { removeCartItem } from 'redux/cartSlice';
import { DetailCartStyles } from '../styles';

interface Props {
  item: CartItem;
  onChange: (value: CartPayLoad) => void;
}

export const ProductQuantity: React.FC<Props> = ({ item, onChange }) => {
  const [quantityTerm, setQuantityTerm] = useState(item.quantity);
  const typingTimeoutRef: React.MutableRefObject<ReturnType<typeof setTimeout> | undefined> =
    useRef();
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();

  const handleQuantity = (value: number) => {
    if (!onChange) return;

    if (typingTimeoutRef.current) {
      clearTimeout(Number(typingTimeoutRef));
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValue = {
        ...item,
        quantity: value,
      };
      onChange(formValue);
    }, 100);
  };

  const handleChangeQuantityInput = (e: any) => {
    const value = e.target.value;
    if (isNaN(value) && parseInt(value) < 1) return;
    setQuantityTerm(parseInt(value));
    handleQuantity(parseInt(value));
  };

  const handleRemoveClick = async () => {
    const value = quantityTerm - 1;
    if (value < 1) {
      setShowModal(true);
    } else {
      setQuantityTerm(value);
      handleQuantity(value);
    }
  };

  const handleAddClick = () => {
    const value = quantityTerm + 1;
    setQuantityTerm(value);
    handleQuantity(value);
  };
  const confirm = async () => {
    const resultAction = await dispatch(removeCartItem(item.id));
    unwrapResult(resultAction);
    setShowModal(false);
  };

  return (
    <DetailCartStyles>
      {showModal ? (
        <Popconfirm
          title='Bạn có muốn xóa sản phẩm đang chọn?'
          onConfirm={confirm}
          okText='Xác nhận'
          cancelText='Hủy'
        >
          <MinusCircleOutlined className='icon  minus_iconn' />
        </Popconfirm>
      ) : (
        <MinusCircleOutlined onClick={handleRemoveClick} className='icon minus_icon' />
      )}

      <InputNumber
        onChange={handleChangeQuantityInput}
        value={quantityTerm}
        style={{
          margin: '0 8px',
          width: '40px',
        }}
      ></InputNumber>
      <PlusCircleOutlined onClick={handleAddClick} className='icon plus_icon' />
    </DetailCartStyles>
  );
};
