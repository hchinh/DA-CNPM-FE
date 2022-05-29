import styled from 'styled-components';

export const ProfileComponentStyles = styled.div`
  .edit-button-icon-wrapper {
    position: absolute;
    right: 12px;
    top: 0;
  }

  .div-info-customer {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .name-info,
  .info-email,
  .info-password {
    margin-top: 15px;
    text-align: center;
    .anticon {
      margin-right: 10px;
    }
  }

  .info-email {
    word-break: break-all;
  }

  .name-info {
    font-size: 18px;
    font-weight: 600;
  }

  .status-info > div:not(:last-child) {
    margin-bottom: 20px;
  }

  .amount-info > div:not(:last-child) {
    margin-bottom: 20px;
  }

  .ant-form-item-label {
    padding: 0 0 3px;
    width: 160px;
    text-align: left;
    & > label {
      font-size: 16px;
      color: ${({ theme }) => theme.text.formLabel};
    }
  }
  input {
    border: solid 1px #ccc;
    width: 100%;
    min-height: 40px;
    border-radius: 5px;
    padding-left: 8px;
  }
  input:focus {
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
    border-color: #03a9f4;
    outline: none;
  }
`;
