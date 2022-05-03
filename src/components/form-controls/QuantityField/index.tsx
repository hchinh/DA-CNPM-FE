import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Form, InputNumber } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { QuantityFieldWrapper } from './styles';
interface Props {
  form: any;
}

type ValidateStatus = Parameters<typeof Form.Item>[0]['validateStatus'];

function validateNumber(number: number): {
  validateStatus: ValidateStatus;
  errorMsg: string | null;
} {
  if (number === null) {
    return {
      validateStatus: 'error',
      errorMsg: 'Please enter a number',
    };
  }

  if (number >= 1) {
    return {
      validateStatus: 'success',
      errorMsg: null,
    };
  }
  return {
    validateStatus: 'error',
    errorMsg: 'The input must be greater than 1 ',
  };
}

export const QuantityField: React.FC<Props> = ({ form }) => {
  const [number, setNumber] = useState<{
    value: number;
    validateStatus?: ValidateStatus;
    errorMsg?: string | null;
  }>({
    value: 1,
  });

  const {
    formState: { errors },
    setValue,
  } = form;

  const onNumberChange = (value: number) => {
    setNumber({
      ...validateNumber(value),
      value,
    });
    setValue('quantity', value);
  };

  const handleMinusIconClick = () => {
    const newNumber = number.value - 1;
    setNumber({ ...validateNumber(newNumber), value: newNumber });
    setValue('quantity', newNumber);
  };

  const handlePlusIconClick = () => {
    const newNumber = number.value + 1;
    setNumber({ ...validateNumber(newNumber), value: newNumber });
    setValue('quantity', newNumber);
  };

  const onFinish = (e: any) => {
    if (e.key === 'Enter') e.preventDefault();
  };

  return (
    <QuantityFieldWrapper>
      <Form onKeyDown={onFinish} className='quantity_form'>
        <MinusCircleOutlined className='minus-btn' onClick={handleMinusIconClick} />

        <Form.Item
          className='input_form_number'
          validateStatus={number.validateStatus}
          help={number.errorMsg}
        >
          <InputNumber
            name='quantity'
            type='number'
            onChange={onNumberChange}
            value={number.value}
          />
        </Form.Item>

        <PlusCircleOutlined className='plus-btn' onClick={handlePlusIconClick} />
      </Form>
    </QuantityFieldWrapper>
  );
};
