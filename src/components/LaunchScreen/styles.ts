import styled from 'styled-components';

export const LaunchScreenStyles = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #fff;
  z-index: 10;
  opacity: 0.7;
  .ant-spin-dot {
    font-size: 40px !important;
  }
  .ant-spin-dot i {
    width: 20px !important;
    height: 20px !important;
  }
`;
