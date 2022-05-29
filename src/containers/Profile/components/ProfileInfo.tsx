import { MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import { User } from 'interfaces';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileComponentStyles } from './styles';
interface Prop {
  customer: User;
}
export const ProfileInfo: React.FC<Prop> = ({ customer }) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/info/password/reset');
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
            <Button type='link' onClick={handleOnClick}>
              Thay đổi mật khẩu
            </Button>
          </div>
        </div>
      </div>
    </ProfileComponentStyles>
  );
};
