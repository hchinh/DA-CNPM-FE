import styled from 'styled-components';

export const QuantityFieldWrapper = styled.div`
  .quantity_form {
    display: flex;
    margin: 20px 0;
    font-size: 20px;
    align-items: center;
  }

  .input_form_number {
    margin: 0 16px;
  }

  .ant-form-item-explain.ant-form-item-explain-connected {
    position: absolute;
    width: fit-content;
    top: 35px;
  }

  .ant-form-item-explain-error {
    white-space: nowrap;
  }

  .ant-input-number-handler svg {
    color: #000;
    font-size: 20px;
    font-weight: 500;
  }
`;
