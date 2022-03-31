import { Product } from 'interfaces/product';
import React from 'react';
import { ProductItem } from './components/ProductItem';
import ProductListWrapper from 'containers/Product/style';

interface Props {
  listData: Product[];
}
export const ProductList: React.FC<Props> = (props) => {
  const { listData } = props;
  return (
    <ProductListWrapper>
      <div className='grid__column10'>
        <div className='home__product'>
          <div className='grid__row'>
            {listData.map((item) => (
              <div key={item.id?.toString()} className='grid__column24'>
                <ProductItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ProductListWrapper>
  );
};
