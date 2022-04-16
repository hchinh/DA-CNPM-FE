import { FilterOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import brandApi from 'api/brandApi';
import categoryApi from 'api/categoryApi';
import { Brand, Category } from 'interfaces';
import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FilterByBrand } from './components/FilterByBrand';
import { FilterByCategory } from './components/FilterByCategory';
import { FilterByPriceRange } from './components/FilterByPriceRange';
import { SearchByName } from './components/SearchByName';
import { SortBytPrice } from './components/SortBytPrice';
import ProductFiltersWrapper from './styles';

interface Props {
  onChange: (value: Object) => void;
}

export const ProductFilter: React.FC<Props> = ({ onChange }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [categoryList, setCategoryList] = useState([] as Category[]);
  const [brandList, setBrandList] = useState([] as Brand[]);
  const [hiddenClearButton, setHiddenClearButton] = useState(true);
  let newFilter = {};

  useEffect(() => {
    (async () => {
      const categoryData = await categoryApi.getAll();
      setCategoryList(categoryData);
      const brandData = await brandApi.getAll();
      setBrandList(brandData);
      if (location.search !== '') setHiddenClearButton(false);
    })();
  }, []);

  const handleCategoryChange = (newCategoryId: number) => {
    newFilter = {
      ...newFilter,
      categoryId: newCategoryId,
    };
  };

  const handleBrandChange = (newBrand: string) => {
    newFilter = {
      ...newFilter,
      brand: newBrand,
    };
  };

  const handlePriceRangeChange = (value: string) => {
    const newValue = JSON.parse(value);
    newFilter = {
      ...newFilter,
      ...newValue,
    };
  };

  const handleSortChange = (newSort: string) => {
    newFilter = {
      ...newFilter,
      sort: newSort,
    };
  };

  const handleSearch = (newSearch: string) => {
    newFilter = {
      ...newFilter,
      q: newSearch,
    };
  };

  const handleOnFilterClick = () => {
    if (!onChange) return;
    onChange(newFilter);
    setHiddenClearButton(false);
  };

  const handleClearClick = () => {
    navigate('/');
    window.location.reload();
    setHiddenClearButton(true);
  };

  return (
    <ProductFiltersWrapper>
      <div className='product_filters'>
        <FilterByCategory data={categoryList} onChange={handleCategoryChange} />
        <FilterByBrand data={brandList} onChange={handleBrandChange} />
        <FilterByPriceRange onChange={handlePriceRangeChange} />
        <SortBytPrice onChange={handleSortChange} />
        <SearchByName onChange={handleSearch} />
        <Button type='primary' style={{ marginRight: '5px' }} onClick={handleOnFilterClick}>
          {' '}
          Filter{' '}
        </Button>
        {hiddenClearButton ? (
          <Button
            type='primary'
            className='hiddenClearButton'
            danger
            onClick={handleClearClick}
            style={{ opacity: '0.5', cursor: 'context-menu' }}
          >
            Clear
          </Button>
        ) : (
          <Button type='primary' danger onClick={handleClearClick}>
            Clear
          </Button>
        )}
      </div>
    </ProductFiltersWrapper>
  );
};
