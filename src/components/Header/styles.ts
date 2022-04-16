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
  .img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 28px;
  }
  .navbar_right {
    display: flex;
  }
  .nav__itemsmenu {
    position: absolute;
    background-color: #fff;
    top: 82%;
    right: 29px;
    border-radius: 2px;
    width: 150px;
    z-index: 1;
    padding-left: 0px;
    list-style: none;
    display: none;
    animation: nav__notifyapp ease-in 0.25s;
  }
  .nav__itemsmenu a:visited {
    color: black;
  }
  .nav__itemsmenu a:active {
    color: black;
  }
  .nav__menuitems {
    padding: 10px;
  }
  .nav__itemsaccount:hover .nav__itemsmenu {
    display: block;
  }
  .nav__menuitems::before {
    content: '';
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
    position: absolute;
    right: 8px;
    top: -20px;
  }
  .nav__menuitems::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    top: -9px;
    width: 90px;
    height: 12px;
  }
  .nav__itemsaccount {
    list-style: none;
  }
  .nav__menuitems:hover {
    background-color: #f8f8f8;
    cursor: pointer;
    color: #3d95f8;
  }
  .logout: hover {
    color: #ff0000;
  }
  .nav__login {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
  }

  .nav__login a {
    color: #33cccc;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
  }
  /* /* Reponsive * */
`;
