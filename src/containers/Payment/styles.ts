import styled from 'styled-components';

export const PaymentStyles = styled.div`
  .navBar {
    background-color: #fff;
    z-index: 1000;
  }
  .container {
    margin-top: 80px;
    background: #f5f5fa;
    padding: 30px 100px;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 33px;
    & > .payment-method {
      width: 50%;
      background-color: #fff;
      border-radius: 5px;
      margin: 10px 0px 50px;
      padding: 15px;
    }
    & > .detail-content {
      width: 50%;
      background-color: #fff;
      border-radius: 5px;
      margin: 10px 0px;
      padding: 15px;
    }
  }
  .payment-button {
    min-height: 50px;
    cursor: pointer;
    &:hover {
      box-shadow: 1px 1px 10px rgb(50 50 50 / 40%);
    }
  }
  #cash {
    margin-top: 10px;
    padding: 1rem;
    max-width: 750px;
    text-transform: uppercase;
    color: #fafafa;
    /* background-color: #00d166; */
    background: linear-gradient(45deg, #07b3b6, #ce08d1);
    border: none;
    border-radius: 3px;
    transition: 0.3s all ease;
    letter-spacing: 0.1rem;
    font-size: 1.85rem;
    padding-left: 2.5rem;
    width: 100%;
  }
  #paypal {
    background: #ffc43a;
    border: 1px solid #ffc43a;
    color: #121661;
    font-family: PayPalSansBig-Regular, Helvetica Neue, Arial, sans-serif;
    font-size: 1.125rem;
    line-height: 1.5rem;
    font-weight: 400;
    padding: 0.825rem 1.875rem;
    position: relative;
    border-radius: 0.25rem;
    cursor: pointer;
    display: inline-block;
    width: 100%;
    max-height: 3.5rem;
    text-align: center;
    text-decoration: none;
    transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease,
      box-shadow 0.2s ease;

    & > img {
      padding: 0;
      display: inline-block;
      background: none;
      border: none;
      width: 9rem;
      max-width: 100%;
    }
  }
`;
