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
`;
