/* eslint-disable react-hooks/exhaustive-deps */
import { LoginOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { unwrapResult } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from 'app/hook';
import { cartItemsCountSelector } from 'containers/Cart/selectors';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkRefreshToken } from 'redux/authSlice';
import { getCart, setLoading } from 'redux/cartSlice';
import { HeaderWrapper } from './styles';
import { UserDropdown } from './UserDropdown';

const NavBar = () => {
  const [navBar, setNavBar] = useState(false);
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.cart.loading);
  const loggedInUser = Number(localStorage.getItem('id'));

  const cartItemsCount = useSelector(cartItemsCountSelector);

  useEffect(() => {
    (async () => {
      const refreshToken = localStorage.getItem('refreshToken');
      if (refreshToken) {
        const resultAction = await dispatch(checkRefreshToken({ refreshToken }));
        unwrapResult(resultAction);
      }
      dispatch(setLoading());
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (loggedInUser) {
        const resultAction = await dispatch(getCart(loggedInUser));
        unwrapResult(resultAction);
      }
    })();
  }, [loading]);

  const changeBackgroundColor = () => {
    if (window.scrollY >= 400) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener('scroll', changeBackgroundColor);

  return (
    <HeaderWrapper>
      <div className={navBar ? 'navBar active ' : 'navBar'}>
        <Link to={'/'} className='header'>
          Spider Shop
        </Link>
        <div className='navbar_right'>
          {!loggedInUser ? (
            <>
              <Link to='/login'>
                <div className='navbar__cart'>
                  <i className='cart__image'>
                    <ShoppingCartOutlined style={{ fontSize: '33px' }} />
                  </i>
                </div>
              </Link>

              <div className='nav__login'>
                <Link to='/login'>
                  <LoginOutlined />
                </Link>
              </div>
            </>
          ) : (
            <>
              <Link to='/cart'>
                <div className='navbar__cart'>
                  <i className='cart__image'>
                    <ShoppingCartOutlined style={{ fontSize: '33px' }} />
                  </i>
                  <div className='cart__counter'>{!isNaN(cartItemsCount) ? cartItemsCount : 0}</div>
                </div>
              </Link>
              <li className='nav__itemsaccount'>
                <UserDropdown />
              </li>
            </>
          )}
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default NavBar;
