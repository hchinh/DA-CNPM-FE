import { Select } from 'antd';
import React from 'react';
const { Option } = Select;
interface Props {
  onChange: (value: string) => void;
}

export const FilterByPriceRange: React.FC<Props> = ({ onChange }) => {
  const handleOnChange = (value: string) => {
    if (!onChange) return;
    onChange(value);
  };
  return (
    <div>
      <Select showSearch placeholder='Price Range' onChange={handleOnChange} dropdownMatchSelectWidth={false}>
        <Option
          value={JSON.stringify({ price_gte: '', price_lte: '' })}
          style={{ fontWeight: 'bold' }}
        >
          All
        </Option>
        <Option
          key={1}
          value={JSON.stringify({ price_gte: '', price_lte: 10000000 })}
          style={{ fontWeight: 'bold' }}
        >
          Less than 10000000
        </Option>
        <Option
          key={2}
          value={JSON.stringify({ price_gte: 10000000, price_lte: 20000000 })}
          style={{ fontWeight: 'bold' }}
        >
          From 10000000 to 20000000
        </Option>
        <Option
          key={3}
          value={JSON.stringify({ price_gte: 20000000, price_lte: 30000000 })}
          style={{ fontWeight: 'bold' }}
        >
          From 20000000 to 30000000
        </Option>
        <Option
          key={4}
          value={JSON.stringify({ price_gte: 30000000, price_lte: '' })}
          style={{ fontWeight: 'bold' }}
        >
          Over 30000000
        </Option>
      </Select>
    </div>
  );
};
