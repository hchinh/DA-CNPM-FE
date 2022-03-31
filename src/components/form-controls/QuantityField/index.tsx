import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Form, InputNumber } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import React, { useState } from 'react';
import { QuantityFieldWrapper } from './styles';

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

export const QuantityField = () => {
  const [number, setNumber] = useState<{
    value: number;
    validateStatus?: ValidateStatus;
    errorMsg?: string | null;
  }>({
    value: 1,
  });

  const [form] = Form.useForm();

  const onNumberChange = (value: number) => {
    setNumber({
      ...validateNumber(value),
      value,
    });
  };

  const handleMinusIconClick = () => {
    const newNumber = number.value - 1;
    setNumber({ ...validateNumber(newNumber), value: newNumber });
    form.setFieldsValue({ inputnumber: number.value });
  };

  const handlePlusIconClick = () => {
    const newNumber = number.value + 1;
    setNumber({ ...validateNumber(newNumber), value: newNumber });
    form.setFieldsValue({ inputnumber: number.value });
  };

  const onFinish = (e: any) => {
    if (e.key === 'Enter') e.preventDefault();
  };

  console.log(number.value);
  return (
    <QuantityFieldWrapper>
      <Form onKeyDown={onFinish} form={form} className='quantity_form'>
        <MinusCircleOutlined className='minus-btn' onClick={handleMinusIconClick} />

        <Form.Item
          className='input_form_number'
          validateStatus={number.validateStatus}
          help={number.errorMsg}
        >
          <InputNumber
            name='inputnumber'
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
