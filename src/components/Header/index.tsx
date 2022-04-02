import { ShoppingCartOutlined } from '@ant-design/icons';
import { cartItemsCountSelector } from 'containers/Cart/selectors';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from 'redux/authSlice';
import { HeaderWrapper } from './styles';

const NavBar = () => {
  const [navBar, setNavBar] = useState(false);
  const dispatch = useDispatch();

  const cartItemsCount = useSelector(cartItemsCountSelector);
  const loggedInUser = useSelector((state: any) => state.auth.currentUser);
  const isLoggedIn = !!loggedInUser?.id;

  const changeBackgroundColor = () => {
    if (window.scrollY >= 400) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  const handleLogout = () => {
    const action = logout();
    dispatch(action);
  };

  window.addEventListener('scroll', changeBackgroundColor);

  return (
    <HeaderWrapper>
      <div className={navBar ? 'navBar active ' : 'navBar'}>
        <Link to={'/'} className='header'>
          PickBazar
        </Link>
        <div className='navbar_right'>
          <Link to='/cart'>
            <div className='navbar__cart'>
              <i className='cart__image'>
                <ShoppingCartOutlined style={{ fontSize: '33px' }} />
              </i>
              <div className='cart__counter'>{!isNaN(cartItemsCount) ? cartItemsCount : 0}</div>
            </div>
          </Link>
          {!isLoggedIn && (
            <div className='nav__login'>
              <Link to='/login'>Login</Link>
            </div>
          )}
          {isLoggedIn && (
            <li className='nav__itemsaccount'>
              <img src='/avatar.png' alt='Ảnh đại diện' className='img' />
              <ul className='nav__itemsmenu'>
                <Link to='/profile'>
                  <li className='nav__menuitems'>Profile</li>
                </Link>

                <li className='nav__menuitems logout' onClick={handleLogout}>
                  Logout
                </li>
              </ul>
            </li>
          )}
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default NavBar;
