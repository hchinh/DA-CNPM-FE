import { Input } from 'antd';
import React from 'react';
interface Props {
  onChange: Function;
}
export const SearchByName: React.FC<Props> = ({ onChange }) => {
  const handleSearch = (e: React.SyntheticEvent) => {
    if (onChange) {
      onChange(e.currentTarget.getAttribute('value'));
    }
  };
  return (
    <div>
      <Input
        placeholder='Search'
        name='p'
        onPressEnter={handleSearch}
        style={{ borderRadius: '8px', fontWeight: 'bold' }}
      />
    </div>
  );
};
