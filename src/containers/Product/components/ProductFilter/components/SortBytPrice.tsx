import { Select } from 'antd';
import React from 'react';

interface Props {
  onChange: Function;
}
const { Option } = Select;
export const SortBytPrice: React.FC<Props> = ({ onChange }) => {
  const handleOnChange = (value: string) => {
    if (onChange) {
      onChange(value);
    }
  };
  return (
    <div>
      <Select showSearch placeholder='Sort By Price' onChange={handleOnChange}>
        <Option value='price,ASC' style={{ fontWeight: 'bold' }}>
          Lowest to Highest
        </Option>
        <Option value='price,DESC' style={{ fontWeight: 'bold' }}>
          Highest to Lowest
        </Option>
      </Select>
    </div>
  );
};
