import { Alert } from 'antd';
import axiosClient from 'api/axiosClient';
import categoryApi from 'api/categoryApi';
import { ProductDetailWrapper } from 'containers/ProductDetail/styles';
import { Product } from 'interfaces/product';
import React, { useEffect, useState } from 'react';
import { formatPrice } from 'utils/common';
import { AddToCartForm } from '../AddToCartForm';

interface Props {
  data: Product;
}

export const ProductInfor: React.FC<Props> = ({ data }) => {
  const { ...product } = data;
  const [open, setOpen] = useState(false);
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    (async () => {
      if (product.categoryId) {
        const { data } = await categoryApi.get(Number(product.categoryId));
        setCategoryName(data.name);
      }
    })();
  }, []);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <ProductDetailWrapper>
      <div>
        {open ? (
          <Alert message='Alert Message Text' type='success' closable afterClose={handleClose} />
        ) : null}

        <h4 className='ProductName'>{product?.name}</h4>
        <h5 className='ProductBand'>{product?.brand}</h5>
        <p className='ProductDescription'>{product?.description}</p>
        <div className='ProductTable'>
          <div className='ProductTableRow'>
            <span className='ProductItem'>Thương hiệu</span>
            <span className='ProductItem'>{product?.brand}</span>
          </div>
          <div className='ProductTableRow'>
            <span className='ProductItem'>Loại</span>
            <span className='ProductItem'>{categoryName}</span>
          </div>
          <div className='ProductTableRow'>
            <span className='ProductItem'>Nước sản xuất</span>
            <span className='ProductItem'>USA</span>
          </div>
          <div className='ProductTableRow'>
            <span className='ProductItem'>Số lượng mua</span>
            <span className='ProductItem'>23.000</span>
          </div>
          <div className='ProductTableRow'>
            <span className='ProductItem'>Số lượng có sẵn </span>
            <span className='ProductItem'>{product?.unitInStock || 'Hết hàng'}</span>
          </div>
        </div>
        <div className='ProductCartWapper'>
          <div className='ProductPriceWapper'>{formatPrice(product?.price)}</div>
          <AddToCartForm onSubmit={handleClose} />
        </div>
      </div>
    </ProductDetailWrapper>
  );
};
