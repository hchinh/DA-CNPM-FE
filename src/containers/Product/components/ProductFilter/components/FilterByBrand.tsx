import { Select } from 'antd';
import { Brand } from 'interfaces';
import React from 'react';

interface Props {
  data: Brand[];
  onChange: (value: string) => void;
}
const { Option } = Select;
export const FilterByBrand: React.FC<Props> = ({ data, onChange }) => {
  const handleOnChange = (value: string) => {
    if (onChange) {
      onChange(value);
    }
  };
  return (
    <div>
      <Select showSearch placeholder='Brand Type' onChange={handleOnChange}>
        <Option value='' style={{ fontWeight: 'bold' }}>
          All
        </Option>
        {data.map((item) => (
          <Option key={item.id?.toString()} value={item.name} style={{ fontWeight: 'bold' }}>
            {item.name}
          </Option>
        ))}
      </Select>
    </div>
  );
};
