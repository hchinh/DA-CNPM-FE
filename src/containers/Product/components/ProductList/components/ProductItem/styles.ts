import styled from 'styled-components';
export default styled.div`
  .home__productitems {
    /* height: 100px; */
    display: block;
    text-decoration: none;
    margin-top: 15px;
    position: relative;
    margin-left: 10px;
    background-color: #fff;
    padding-bottom: 10px;
    border-radius: 2px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    transition: transform linear 0.1s;
    will-change: transform;
    cursor: pointer;
  }
  .home__productitems::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 0;
    height: 0;
    background: transparent;
    border: 1px solid transparent;
  }
  .home__productitems:hover::before {
    animation: animate 0.5s linear forwards;
  }
  @keyframes animate {
    0% {
      width: 0;
      height: 0;
      border-top-color: #00cc99;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-left-color: transparent;
    }
    50% {
      width: 100%;
      height: 0;
      border-top-color: #00cc99;
      border-right-color: #00cc99;
      border-bottom-color: transparent;
      border-left-color: transparent;
    }
    100% {
      width: 100%;
      height: 100%;
      border-top-color: #00cc99;
      border-right-color: #00cc99;
      border-bottom-color: transparent;
      border-left-color: transparent;
    }
  }
  .home__productitems::after {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 0;
    height: 0;
    background: transparent;
    border: 1px solid transparent;
  }
  .home__productitems:hover::after {
    animation: animate2 0.5s linear forwards;
  }
  @keyframes animate2 {
    0% {
      width: 0;
      height: 0;
      border-top-color: transparent;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-left-color: #00cc99;
    }
    50% {
      width: 0;
      height: 100%;
      border-top-color: transparent;
      border-right-color: transparent;
      border-bottom-color: #00cc99;
      border-left-color: #00cc99;
    }
    100% {
      width: 100%;
      height: 100%;
      border-top-color: transparent;
      border-right-color: transparent;
      border-bottom-color: #00cc99;
      border-left-color: #00cc99;
    }
  }
  .home__productitems:hover {
    transform: scale(1.03);
    box-shadow: 0 3px 12px #ccc;
    margin-top: 15px;
  }
  .home__productitemsimg {
    padding-top: 100%;
    background-size: contain;
    background-position: center;
  }
  .home__productitemsname {
    padding: 0px 10px;
    line-height: 1.8rem;
    height: 3.6rem;
    overflow: hidden;
    font-size: 14px;
    font-weight: 600;
    display: block;
    color: #000;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    margin: 6px 0px;
    margin-bottom: 30px;
  }
  .home__productitemsprice {
    color: #333;
    font-size: 14px;
    margin-left: 15px;
    font-weight: 600;
    line-height: 36px;
  }

  .home__productprice {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .btn_cart {
    font-size: 13px;
    margin-right: 17px;
    padding: 0px 14px;
    line-height: 32px;
    height: 36px;
    border: 2px solid rgb(247, 247, 247);
    border-radius: 18px;
    font-weight: 500;
    color: #fff;
    background-color: var(--primary-color);
    transition: 0.5s;
    cursor: pointer;
    z-index: 1;
    font-family: 'Font Awesome 5 Free';
    text-decoration: none;
  }
  .btn_cart i {
    margin-right: 5px;
    font-size: 12px;
  }
  .btn_cart:hover {
    letter-spacing: 1px;
    color: #333;
    background-color: transparent;
    border-color: #333;
  }
  .container_productDetails {
    padding-bottom: 0px;
    background-color: #fff;
  }
  .sweet_loading {
    justify-content: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    background-color: #21283a;
  }
  .sweet_loading span {
    color: #f5a623;
    margin-top: 10px;
    font-size: 18px;
    font-weight: 600;
    font-family: 'Merienda';
  }

  /* Reponsive */
  @media (min-width: 768px) and (max-width: 1024px) {
    .grid__column24 {
      width: 25%;
    }
    .home__productitemsname {
      font-size: 14px;
    }
    .home__productitemsprice {
      font-size: 13px;
    }

    .home__productprice {
    }
    .btn_cart {
      font-size: 11px;
      margin-right: 6px;
    }
    .btn_cart i {
      margin-right: 3px;
      font-size: 8px;
    }
  }

  @media (max-width: 764px) {
    .grid__column10 {
      padding-left: 0px;
    }
    .grid__column24 {
      padding-left: 0px;
      width: 50%;
    }
    .home__productitemsprice {
      font-size: 12px;
      margin-left: 11px;
    }
    .btn_cart {
      font-size: 9px;
      margin-right: 7px;
    }
    .btn_cart i {
      margin-right: 3px;
      font-size: 9px;
    }
  }
`;
