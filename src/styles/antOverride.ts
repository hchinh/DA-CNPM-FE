import { createGlobalStyle } from 'styled-components';

export const AntOverrideStyles = createGlobalStyle`
    

    .ant-pagination-options-size-changer.ant-select{
        display:none;
    }
    .ant-select-selector{
        width:180px !important;
        border-radius:8px !important;
    }
    .ant-select-selection-item{
        font-weight:bold;
    }
    .ant-modal-title {
    color: red;
    font-weight: bold;
  }
  .ant-modal-close-x:hover{
      color:red;
      opacity:0.7;
  }
  .ant-drawer-header{
      background-color: #2196f3;
  }
  .ant-drawer-title{
    color: #fff;
    text-transform: uppercase;
    font-size: 18px;
  }
  .ant-drawer-close{
      color:#fff
  } 
      
  
`;
