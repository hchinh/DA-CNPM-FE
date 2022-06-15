import { Form, notification } from 'antd';
import { userApi } from 'api/userApi';
import ModalCustom from 'components/ModalCustom';
import { ModalForwardRefHandle } from 'interfaces/modal';
import React, { useImperativeHandle, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormChangePassword from './FormChangePassword';

const ChangePasswordModal: React.ForwardRefRenderFunction<ModalForwardRefHandle, unknown> = (
  props,
  ref
) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState<boolean>(false);
  const navigate = useNavigate();

  useImperativeHandle(
    ref,
    () => ({
      open: () => setVisible(true),
    }),
    []
  );

  const handleClose = () => {
    setVisible(false);
    form.resetFields();
  };

  const handleChangePassword = () => {
    form
      .validateFields()
      .then(({ confirmNewPassword, ...values }) => {
        setLoading(true);
        return userApi.changePassword({
          email: localStorage.getItem('email') ?? '',
          ...values,
        });
      })
      .then((response: any) => {
        notification.success({ message: 'Thay đổi mật khẩu thành công' });
        setLoading(false);
        handleClose();
        navigate('/login');
      })
      .catch((error) => {
        setLoading(false);
        notification.error({ message: 'Thay đổi mật khẩu thất bại' });
      });
  };

  return (
    <ModalCustom
      title='Change Password'
      onCancel={handleClose}
      visible={visible}
      onOk={handleChangePassword}
      okButtonProps={{ loading }}
    >
      <Form form={form} layout='vertical'>
        <FormChangePassword />
      </Form>
    </ModalCustom>
  );
};

export default React.forwardRef(ChangePasswordModal);
