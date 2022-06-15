import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { unwrapResult } from '@reduxjs/toolkit';
import { Button, Form, Input, notification, Space } from 'antd';
import { useAppDispatch, useAppSelector } from 'app/hook';
import { LoginPayload } from 'interfaces';
import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from 'redux/authSlice';
import { LoginPageWrapper } from './styles';

const LoginPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.auth.loading);

  const onFinish = async (values: LoginPayload) => {
    try {
      const resultAction = await dispatch(login(values));
      unwrapResult(resultAction);
      notification.success({
        message: 'Login successfully! 😍😎',
      });
      navigate('/');
    } catch (error: any) {
      notification.error({
        message: `${error.message} 😥😭`,
      });
    }
  };

  return (
    <LoginPageWrapper>
      <div className='banner'>
        <img src='background.png' alt='banner' />
      </div>
      <div className='container'>
        <div className='content'>
          <span className='content-header'>Welcome back</span>
          <header className='content-title'>Login to your account</header>
          <Form
            name='normal_login'
            className='login-form'
            onFinish={onFinish}
            layout='vertical'
            size='large'
          >
            <Form.Item label='Username'>
              <Space>
                <Form.Item
                  name='userName'
                  noStyle
                  rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                  <Input
                    style={{ width: 360 }}
                    prefix={<UserOutlined className='site-form-item-icon' />}
                    placeholder='Username'
                  />
                </Form.Item>
              </Space>
            </Form.Item>
            <Form.Item label='Password'>
              <Space>
                <Form.Item
                  name='password'
                  noStyle
                  rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                  <Input.Password
                    style={{ width: 360 }}
                    prefix={<LockOutlined className='site-form-item-icon' />}
                    placeholder='Password'
                  />
                </Form.Item>
              </Space>
            </Form.Item>

            <Form.Item>
              <Button
                type='primary'
                style={{ width: 360 }}
                htmlType='submit'
                className='login-form-button'
                loading={loading}
              >
                Log in
              </Button>
            </Form.Item>
            <Form.Item style={{ textAlign: 'center' }}>
              If you don't have an account,
              <Link to='/register'> Register here</Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </LoginPageWrapper>
  );
};

export default LoginPage;
