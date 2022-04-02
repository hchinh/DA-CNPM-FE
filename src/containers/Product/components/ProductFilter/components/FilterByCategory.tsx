import { Select } from 'antd';
import { Category } from 'interfaces';
import React from 'react';

interface Props {
  data: Category[];
  onChange: (value: number) => void;
}
const { Option } = Select;
export const FilterByCategory: React.FC<Props> = ({ data, onChange }) => {
  const handleOnChange = (value: string) => {
    if (onChange) {
      onChange(Number(value));
    }
  };
  return (
    <div>
      <Select showSearch placeholder='Category Type' onChange={handleOnChange}>
        <Option value='' style={{ fontWeight: 'bold' }}>
          All
        </Option>
        {data.map((item) => (
          <Option key={item.id} value={item.id} style={{ fontWeight: 'bold' }}>
            {item.name}
          </Option>
        ))}
      </Select>
    </div>
  );
};
