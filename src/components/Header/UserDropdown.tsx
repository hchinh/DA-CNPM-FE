import {
  LogoutOutlined,
  ProfileOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { unwrapResult } from '@reduxjs/toolkit';
import { Avatar, Dropdown, Menu } from 'antd';
import { userApi } from 'api/userApi';
import { useAppDispatch } from 'app/hook';
import { User } from 'interfaces';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from 'redux/authSlice';
import { MenuStyles } from './styles';

export const UserDropdown = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<User>();
  useEffect(() => {
    (async () => {
      try {
        const id = Number(localStorage.getItem('id'));
        const data: User = await userApi.getById(id);
        setProfile(data);
      } catch (error) {
        console.log('Failed to fetch profile: ', error);
      }
    })();
  }, []);
  const handleLogout = async () => {
    try {
      const resultAction = await dispatch(logout());
      unwrapResult(resultAction);
      navigate('/');
    } catch (error) {}
  };

  const userMenu = (
    <MenuStyles>
      <Menu.Item key='profile'>
        <div className='div-menu-item'>
          <Link to='/profile' className='link-menu-item'>
            <div className='profile-menu-item'>
              <ProfileOutlined className='icon-menu-item' />
              <span>Thông tin cá nhân</span>
            </div>
          </Link>
        </div>
      </Menu.Item>

      <Menu.Item key='order'>
        <div className='div-menu-item'>
          <Link to='/order' className='link-menu-item'>
            <div className='order-menu-item'>
              <ShoppingCartOutlined className='icon-menu-item' />
              <span>Đơn hàng của bạn</span>
            </div>
          </Link>
        </div>
      </Menu.Item>

      <Menu.Item key='logout'>
        <div className='div-menu-item' onClick={handleLogout}>
          <LogoutOutlined className='icon-menu-item' />
          Đăng xuất
        </div>
      </Menu.Item>
    </MenuStyles>
  );
  return (
    <Dropdown overlay={userMenu} trigger={['click']} overlayStyle={{ zIndex: 100000000 }}>
      <div className='div-user-info'>
        <span className='userInfo'>
          <strong>{profile?.name}</strong>
        </span>
        <Avatar
          size='large'
          src={
            profile?.profilePicture
              ? `data:image/jpeg;base64,${profile?.profilePicture}`
              : 'default-avatar.jpeg'
          }
          icon={<UserOutlined />}
        />
      </div>
    </Dropdown>
  );
};
