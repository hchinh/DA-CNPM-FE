import { MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import { User } from 'interfaces';
import { ModalForwardRefHandle } from 'interfaces/modal';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ChangePasswordModal from './ChangePasswordModal';
import { ProfileComponentStyles } from './styles';
interface Prop {
  customer: User;
}
export const ProfileInfo: React.FC<Prop> = ({ customer }) => {
  const navigate = useNavigate();
  const changePasswordModalRef = useRef<ModalForwardRefHandle>(null);

  const handleShowModal = () => {
    changePasswordModalRef.current && changePasswordModalRef.current.open();
  };
  return (
    <ProfileComponentStyles>
      <div className='profile-info'>
        <div className='div-info-customer'>
          <Avatar
            icon={<UserOutlined />}
            src={
              customer?.profilePicture
                ? `data:image/jpeg;base64,${customer?.profilePicture}`
                : 'default-avatar.jpeg'
            }
            size={150}
          />
          <div className='name-info'>
            <span className='name-customer'>{customer?.userName || 'N/A'}</span>
          </div>
          <div className='info-email'>
            <MailOutlined />
            <span className='email-customer'>{customer?.email || 'N/A'}</span>
          </div>
          <div className='info-email'>
            <PhoneOutlined />
            <span className='email-customer'>{customer?.phoneNumber}</span>
          </div>
          <div className='info-password'>
            <Button type='link' onClick={handleShowModal}>
              Thay đổi mật khẩu
            </Button>
          </div>
        </div>
      </div>
      <ChangePasswordModal ref={changePasswordModalRef} />
    </ProfileComponentStyles>
  );
};
