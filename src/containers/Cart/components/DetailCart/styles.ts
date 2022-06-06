import styled from 'styled-components';

export const DetailCartStyles = styled.div`
  .ant-input-number-handler-wrap {
    display: none;
  }
  .ant-input-number-input-wrap input {
    text-align: center;
  }
  .detail-cart__nav {
    background-color: #fff;
    margin: 15px;
    display: flex;
    align-items: center;
    border-radius: 5px;
  }
  .checkbox {
    padding: 0 5px;
  }

  .cart-item {
    background-color: #fff;
    margin: 15px;
    align-item: center;
    border-radius: 5px;
    & .ant-row {
      display: flex;
      -webkit-box-pack: start;
      justify-content: flex-start;
      -webkit-box-align: center;
      align-items: center;
      margin: 0px -15px;
    }
    &__info {
      padding: 15px;
      display: flex;
      align-items: center;
      justify-content: left;
    }
    &__thumbnail {
      width: 20%;
      margin-right: 15px;
      & img {
        width: 100%;
      }
    }
    &__name {
      display: -webkit-box;
      text-overflow: ellipsis;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 14px;
      margin-bottom: 5px;
      line-height: 20px;
      font-family: Roboto, Helvetica, Arial, sans-serif;
      & a {
        color: rgb(36, 36, 36);
      }
      & :hover {
        color: rgb(11, 116, 229);
      }
    }
    &__saleprice {
      font-weight: bold;
      color: rgb(36, 36, 36);
      font-size: 14px;
      display: inline-block;
    }
    &__totalprice {
      color: rgb(255, 66, 78);
      font-size: 13px;
      font-weight: bold;
      line-height: 20px;
      display: block;
    }
  }
  .icon {
    font-size: 20px;
    cursor: pointer;
    &.delete_icon {
      cursor: pointer;
      flex: 0 0 auto;
      color: rgba(0, 0, 0, 0.54);
      padding: 12px;
      overflow: visible;
      font-size: 1.5rem;
      text-align: center;
      transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      border-radius: 50%;
      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }
    &.plus_icon:hover {
      color: rgb(11, 116, 229);
    }
    &.minus_icon:hover {
      color: red;
    }
  }
  .info-edit {
    margin-left: 8px;
    font-size: 16px;
    color: #1890ff;
  }
`;
