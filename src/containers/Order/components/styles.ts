import styled from 'styled-components';
export const OrderDetailStyles = styled.div`
  .container {
    padding: 100px 100px 0;
    background-color: rgb(248, 248, 248);
    padding-bottom: 30px;
    min-height: 550px;
    & > .nav__title {
      background-color: #fff;
      font-size: 14px;
      text-align: center;
      padding: 5px 0;
      border-radius: 5px;
      margin-bottom: 16px;
      font-weight: bold;
    }
    & > .orders_content {
      & > .orders_content-item {
        display: flex;
        background-color: #fff;
        margin: 10px 0;
        border-radius: 5px;
        text-align: center;
        align-items: center;
      }
    }

    .detail-order-item {
      border-left: solid 2px rgb(248, 248, 248);
      min-height: 40px;

      & > .detail-content {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        padding-left: 5px;

        & > .item__thumbnail {
          width: 10%;
          margin-right: 15px;
          & img {
            width: 100%;
          }
        }

        & > .item__name {
          display: -webkit-box;
          text-overflow: ellipsis;
          overflow: hidden;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          font-size: 14px;
          line-height: 20px;
          font-family: Roboto, Helvetica, Arial, sans-serif;
          margin: 0 5px 5px;
          & a {
            color: rgb(36, 36, 36);
          }
          & :hover {
            color: rgb(11, 116, 229);
          }
        }
        & > .quantity {
          font-weight: bold;
          flex-grow: 1;
          text-align: end;
          color: red;
        }
      }
    }
  }
`;
