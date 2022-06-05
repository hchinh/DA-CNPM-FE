import { Menu } from 'antd';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  .navBar {
    padding: 20px 30px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    position: fixed;
    z-index: 2;
    top: 0px;
    left: 0px;
    width: 100%;
    background-color: transparent;
    transition: all 0.3s ease 0s;

    &.active {
      background-color: rgb(255, 255, 255);
    }
  }
  .header {
    line-height: 43px;
    color: #33cccc;
    /* color: #00CC99; */
    /* #00CC99 */
    font-size: 30px;
    margin-left: 23px;
    text-decoration: none;
    font-weight: 600;
    font-family: 'Dancing Script';
  }

  /* Reponsive */
  @media (min-width: 768px) and (max-width: 1024px) {
    .navBar {
      width: 100%;
    }
  }

  @media (max-width: 764px) {
    .navBar {
      width: 82%;
    }
    .header {
      margin-left: 15px;
    }
  }
  .navbar_right {
    display: flex;
  }
  .navbar__cart {
    /* background: #fff; */
    border: none;
    border-radius: 15px;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    cursor: pointer;
    float: right;
    margin-top: 0px;
    margin-right: 20px;
    position: relative;
  }

  .navbar__cart:hover {
    opacity: 0.75;
  }

  .cart__title {
    font-size: 30px;
    font-weight: bold;
    color: var(--dark-color);
  }

  .cart__image {
    width: 30px;
    height: 30px;
    object-fit: contain;
  }

  .cart__counter {
    height: 40px;
    width: 40px;
    border: 1px solid var(--secondary-color);
    border-radius: 50%;
    color: var(--dark-color);
    background: var(--light-color);
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .navbar__cart i {
    font-size: 25px;
    color: #33cccc;
  }
  .cart__counter {
    position: absolute;
    top: 3px;
    left: 23px;
    font-size: 15px;
    background-color: #33cccc;
    width: 16px;
    height: 14px;
    color: #fff;
  }

  .div-user-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    & > .userInfo {
      margin-right: 8px;
      color: #33cccc;
    }
  }
  .nav__login {
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    & > a {
      color: #33cccc;
    }
  }
`;

export const MenuStyles = styled(Menu)`
  min-width: 120px;
  div.active {
    background: ${({ theme }) => theme.palette.primary};
    border: 1px solid ${({ theme }) => theme.palette.primary};
  }
  .ant-dropdown-menu-item {
    padding: 0;
    .link-menu-item {
      width: 100%;
      height: 100%;
      margin: 0;
      color: ${({ theme }) => theme.text.primary};
    }
    .icon-menu-item {
      margin-right: 10px;
    }
    .div-menu-item {
      display: flex;
      align-items: center;
      padding: 5px 12px;
      & > div {
        margin-right: 10px;
        text-align: center;
        width: 32px;
      }
    }
    .profile-menu-item,
    .div-menu-item {
      font-size: 14px;
    }
  }
`;
