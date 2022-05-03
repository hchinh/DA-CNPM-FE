import { unwrapResult } from '@reduxjs/toolkit';
import { notification } from 'antd';
import categoryApi from 'api/categoryApi';
import { useAppDispatch, useAppSelector } from 'app/hook';
import { ProductDetailWrapper } from 'containers/ProductDetail/styles';
import { CartItem, CartPayLoad, Product } from 'interfaces';
import React, { useEffect, useState } from 'react';
import { addToCart, updateCartItem } from 'redux/cartSlice';
import { formatPrice } from 'utils/common';
import { AddToCartForm } from '../AddToCartForm';

interface Props {
  data: Product;
}

export const ProductInfor: React.FC<Props> = ({ data }) => {
  const dispatch = useAppDispatch();
  const cartList = useAppSelector((state) => state.cart.cartItems);
  const loggedInUser = useAppSelector((state) => state.auth.currentUser);
  const { ...product } = data;
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    (async () => {
      if (product.categoryId) {
        const { data } = await categoryApi.get(Number(product.categoryId));
        setCategoryName(data.name);
      }
    })();
  }, []);

  const handleAddToCartForm = async (quantity: number) => {
    try {
      const index = cartList.findIndex((x: CartItem) => x.productId === product.id);
      let resultAction;
      if (index >= 0) {
        resultAction = await dispatch(
          updateCartItem({
            cartId: cartList[index].id,
            payload: {
              ...cartList[index],
              quantity: cartList[index].quantity + quantity,
            },
          })
        );
      } else {
        const payload: CartPayLoad = {
          customerId: Number(loggedInUser?.id),
          quantity: quantity,
          productId: Number(product.id),
          salePrice: product.price,
        };
        resultAction = await dispatch(addToCart(payload));
      }
      unwrapResult(resultAction);

      notification['success']({
        message: 'Thêm vào giỏ hàng thành công',
        placement: 'bottom',
      });
    } catch (error) {}
  };

  return (
    <ProductDetailWrapper>
      <div>
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
          <AddToCartForm onSubmit={handleAddToCartForm} />
        </div>
      </div>
    </ProductDetailWrapper>
  );
};
