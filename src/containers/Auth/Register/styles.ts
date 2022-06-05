import styled from 'styled-components';

export const RegisterPageWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;

  .banner {
    width: 50%;
    display: flex;
    align-items: center;

    & > img {
      width: 100%;
      min-height: 100vh;
      object-fit: content;
      object-position: center;
    }
  }

  .container {
    display: flex;
    margin: auto;
  }

  .content {
    display: flex;
    flex-direction: column;
    margin: auto;

    &-header {
      font-size: 16px;
      letter-spacing: 0.15px;
      color: ${({ theme }) => theme.text.tabTitle};
    }

    &-title {
      font-size: 30px;
      font-weight: bold;
      letter-spacing: 0.25px;
      margin-bottom: 20px;
      color: ${({ theme }) => theme.text.headerTable};
    }

    .site-form-item-icon {
      margin-right: 4px;
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

    .ant-input-affix-wrapper {
      border-radius: 5px;
    }
    .ant-form-item-control {
      min-width: 350px !important;
    }
    .ant-btn-primary {
      border-radius: 5px;

      & > span {
        font-size: 16px;
        letter-spacing: 0.15px;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    display: block;

    .banner {
      width: 100%;
      & > img {
        height: 200px;
        object-fit: cover;
      }
    }
    .container {
      margin: 30px;
    }
    .content {
      padding: 0 10px;

      .ant-form-item-control {
        min-width: 300px !important;
      }
    }
  }
`;
