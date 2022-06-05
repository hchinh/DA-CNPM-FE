import { Button, Form, Image, notification, Radio } from 'antd';
import { userApi } from 'api/userApi';
import { User } from 'interfaces';
import Input from 'rc-input';
import React, { useState } from 'react';
import { ProfileComponentStyles } from './styles';
import { FormContextCustom } from 'context/FormContextCustom';
import FormUploadImage from 'components/FormUploadImage';

interface Prop {
  customer: User;
  onRefresh: () => void;
}

export const ProfileUpdate: React.FC<Prop> = ({ customer, onRefresh }) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const onFinish = async (values: any) => {
    try {
      let { profilePicture, gender } = values;
      if (profilePicture === null) profilePicture = customer.profilePicture;
      if (!gender) gender = customer.gender;
      const updateValues = { ...values, profilePicture, gender };
      setLoading(true);
      await userApi.update(customer.id, updateValues);
      notification.success({
        message: `Cập nhật thông tin thành công`,
      });
      onRefresh();
      setLoading(false);
    } catch (error: any) {
      notification.error({
        message: `${error.message} 😥😭`,
      });
    }
  };
  return (
    <ProfileComponentStyles>
      <div className='profile-update'>
        <Form name='update' scrollToFirstError onFinish={onFinish} form={form}>
          <FormContextCustom.Provider value={{ form }}>
            <Form.Item
              name='userName'
              label='Username'
              tooltip='What do you want others to call you?'
              initialValue={customer.userName}
              rules={[
                {
                  message: 'Please input your nickname!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    const regex = /^\S*$/;
                    if (regex.test(value)) {
                      return Promise.resolve();
                    }

                    return Promise.reject(new Error("Username don't contain whitesapces"));
                  },
                }),
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name='name'
              label='Full Name'
              tooltip='What do you want others to call you?'
              initialValue={customer.name}
              rules={[
                {
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
              initialValue={customer.phoneNumber}
              rules={[
                {
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
              initialValue={customer.email}
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name='gender' label='Gender'>
              <Radio.Group defaultValue={Number(customer.gender)}>
                <Radio value={0}>Male</Radio>
                <Radio value={1}>Female</Radio>
                <Radio value={2}>Other</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item name='address' label='Address' initialValue={customer.address}>
              <Input />
            </Form.Item>
            <Form.Item label='Avatar'>
              <FormUploadImage name='profilePicture' />
            </Form.Item>

            <Form.Item>
              <Button type='primary' htmlType='submit' style={{ width: '100%' }} loading={loading}>
                Cập nhật
              </Button>
            </Form.Item>
          </FormContextCustom.Provider>
        </Form>
      </div>
    </ProfileComponentStyles>
  );
};
