import styled from 'styled-components';

export default styled.div`
  .product_filters {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin: 30px 0;
    & > div {
      margin: 0 10px;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    .product_filters {
      justify-content: center;
      display: flex;
      padding: 20px;
      flex-wrap: wrap;
      position: relative;
      top: 30px;
      & > div {
        padding: 10px 0;
      }
    }
  }
  @media (max-width: 767px) {
    .product_filters {
      flex-direction: column;
      justify-content: left;
      margin-bottom: 0px;
      padding: 20px 0;
      & > div {
        width: 100%;
        padding: 10px;

        & > .ant-select {
          width: 100% !important;

          & > .ant-select-selector {
            width: 100% !important;
          }
        }
      }
    }
  }
`;
