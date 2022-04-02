import { unwrapResult } from '@reduxjs/toolkit';
import { Button, Form, Input, notification, Radio } from 'antd';
import { useAppDispatch, useAppSelector } from 'app/hook';
import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from 'redux/authSlice';
import { RegisterPageWrapper } from './styles';

const RegisterPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.auth.loading);

  const onFinish = async (values: any) => {
    try {
      const { confirm, ...newValues } = values;
      console.log(newValues);
      const resultAction = await dispatch(register(newValues));
      unwrapResult(resultAction);
      notification.success({
        message: 'Register successfully! 😍😎',
      });
      navigate('/login');
    } catch (error: any) {
      notification.error({
        message: `${error.message} 😥😭`,
      });
    }
  };

  return (
    <RegisterPageWrapper>
      <div className='banner'>
        <img src='background.png' alt='banner' />
      </div>
      <div className='container'>
        <div className='content'>
          <span className='content-header'>Welcome </span>
          <header className='content-title'>Create your account now</header>
          <Form name='register' onFinish={onFinish} scrollToFirstError>
            <Form.Item
              name='userName'
              label='Username'
              tooltip='What do you want others to call you?'
              rules={[
                {
                  required: true,
                  message: 'Please input your nickname!',
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name='password'
              label='Password'
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name='confirm'
              label='Confirm Password'
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      new Error('The two passwords that you entered do not match!')
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name='name'
              label='Full Name'
              tooltip='What do you want others to call you?'
              rules={[
                {
                  required: true,
                  message: 'Please input your full name!',
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name='phoneNumber'
              label='Phone Number'
              rules={[
                {
                  required: true,
                  message: 'Please input your phone number!',
                },
                {
                  len: 10,
                  message: 'Please input 10 number ',
                },
              ]}
            >
              <Input type='number' />
            </Form.Item>

            <Form.Item
              name='email'
              label='E-mail'
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name='gender'
              label='Gender'
              rules={[
                {
                  required: true,
                  message: 'Please select gender!',
                },
              ]}
            >
              <Radio.Group>
                <Radio value={0}>Male</Radio>
                <Radio value={1}>Female</Radio>
                <Radio value={2}>Other</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item name='address' label='Address'>
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit' style={{ width: '100%' }} loading={loading}>
                Register
              </Button>
            </Form.Item>
            <Form.Item style={{ textAlign: 'center' }}>
              If you have an account,
              <Link to='/login'> login here</Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </RegisterPageWrapper>
  );
};

export default RegisterPage;
