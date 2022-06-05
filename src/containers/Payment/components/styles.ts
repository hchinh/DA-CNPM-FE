import styled from 'styled-components';
export const DetailOrderStyles = styled.div`
  .total-cost-item {
    margin-bottom: 30px;
  }
  & .customer-info {
    & .block_header-title {
      font-size: 14px;
      font-weight: bold;
    }
    & .info-edit {
      margin-left: 8px;
      font-size: 16px;
      color: #1890ff;
    }
    & .customer-info-detail {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      color: rgb(56, 56, 61);
      margin-bottom: 2px;
      font-weight: 600;

      & i {
        display: block;
        width: 1px;
        height: 20px;
        background-color: rgb(235, 235, 240);
        margin: 0px 8px;
      }
    }
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > p {
      font-size: 14px;
      font-weight: bold;
    }
  }
  .line {
    border-top: 1px #e3e3e3 solid;
    margin-top: 5px;
    margin-bottom: 10px;
  }
  .order-item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    & > .product-item__info {
      width: 70%;
      display: flex;

      align-items: flex-start;

      & > .product-thumnail {
        width: 40%;
      }
      & > .product-name {
        margin-left: 8px;
        font-size: 14px;
        line-height: 21px;
      }
    }
    & > .product-item__price {
      width: 30%;
      .label {
        font-size: 14px;
        font-weight: bold;
        margin: 8px;
      }
      .value {
        float: right;
      }
    }
  }
  .order-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__label {
      font-size: 16px;
      font-weight: bold;
    }
    &__value {
      font-weight: bold;
      font-size: 16px;
      color: #f00;
    }
  }
`;
