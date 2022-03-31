import { ProductList } from 'containers/Product/components/ProductList';
import { Product } from 'interfaces/product';
import React from 'react';
import { ProductRelatedwrapper } from './styles';

interface Props {
  data: Product[];
}
export const ProductRelated: React.FC<Props> = ({ data }) => {
  const [...productList] = data;

  return (
    <ProductRelatedwrapper>
      <span className='header'>Sản phẩm liên quan</span>
      <ProductList listData={productList} />
    </ProductRelatedwrapper>
  );
};
