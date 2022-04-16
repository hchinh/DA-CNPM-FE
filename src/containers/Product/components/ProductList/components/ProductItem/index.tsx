import { Product } from 'interfaces';
import React from 'react';
import { Link } from 'react-router-dom';
import ProductItemWrapper from 'containers/Product/style';
import { SearchOutlined } from '@ant-design/icons';
import { formatPrice } from 'utils/common';

interface Props {
  item: Product;
}

export const ProductItem: React.FC<Props> = (props) => {
  const { item } = props;
  return (
    <ProductItemWrapper>
      <Link to={`/product/${item.id}`} className='home__productitems'>
        <div
          className='home__productitemsimg'
          style={{ backgroundImage: `url(data:image/jpeg;base64,${item.thumbnail})` }}
        ></div>
        <h4 className='home__productitemsname'>{item.name}</h4>
        <div className='home__productprice'>
          <span className='home__productitemsprice'>{formatPrice(Number(item.price))}</span>
          <div className='btn_cart'>
            <i>
              <SearchOutlined style={{ marginRight: '5px' }} />
            </i>
            Details
          </div>
        </div>
      </Link>
    </ProductItemWrapper>
  );
};
