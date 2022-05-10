/* eslint-disable react-hooks/exhaustive-deps */
import { DeleteOutlined } from '@ant-design/icons';
import { Checkbox, Col, Image, Popconfirm, Row } from 'antd';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { useAppDispatch, useAppSelector } from 'app/hook';
import { CartItem, CartPayLoad } from 'interfaces';
import React, { useEffect, useState } from 'react';
import { setSelectedList } from 'redux/cartSlice';
import { formatPrice } from 'utils/common';
import { ProductQuantity } from './components/ProductQuantity';
import { ProductToTal } from './components/ProductTotal';
import { DetailCartStyles } from './styles';
interface Props {
  cartList: CartItem[];
  onChange: (value: CartPayLoad) => void;
  onRemove: (cartItemId: number | { ids: number[] }) => void;
}
export const DetailCart: React.FC<Props> = ({ cartList, onChange, onRemove }) => {
  const plainOptions = cartList.map((item) => item.id);
  const [checkedList, setCheckedList] = useState([] as CheckboxValueType[]);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const [totalSelected, setTotalSelected] = useState(0);
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.cart.loading);

  const handleCheckItemChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < cartList.length);
    setCheckAll(list.length === cartList.length);
  };

  const handleCheckAllChange = (e: any) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };
  const handleQuantityChange = (value: CartPayLoad) => {
    if (onChange) onChange(value);
  };
  const handleRemoveItem = (cartItemId: number) => {
    if (onRemove) onRemove(cartItemId);
    setCheckedList([]);
  };
  const handleRemoveItems = () => {
    const cartIdsSelected = checkedList as number[];
    if (onRemove) onRemove({ ids: cartIdsSelected });
    setCheckedList([]);
  };
  useEffect(() => {
    const total = checkedList.reduce((total: number, cur) => {
      const idx = cartList.findIndex((item) => item.id === (cur as number));
      if (idx >= 0) {
        total += cartList[idx].quantity;
      }
      return total;
    }, 0);
    setTotalSelected(total);

    const checkedCartList = checkedList.map((item) => {
      const idx = cartList.findIndex((cartItem) => cartItem.id === item);
      return cartList[idx];
    });
    const action = setSelectedList(checkedCartList);
    dispatch(action);
  }, [checkedList, loading]);

  return (
    <DetailCartStyles>
      <ProductToTal
        onRemoves={handleRemoveItems}
        onSelectedAll={handleCheckAllChange}
        totalSelected={totalSelected}
        indeterminate={indeterminate}
        checkAll={checkAll}
      />
      <>
        <div className='cart-detail'>
          <Checkbox.Group value={checkedList} onChange={handleCheckItemChange}>
            {cartList.map((item) => (
              <li key={item.productId} className='cart-item'>
                <Row>
                  <Col span={10} className='cart-item__info'>
                    <Checkbox value={item.id} className='checkbox'></Checkbox>
                    <div className='cart-item__thumbnail'>
                      <Image
                        src={`data:image/png;base64,${item.productThumbnail}`}
                        alt={item.productName}
                      ></Image>
                    </div>
                    <div className='cart-item__name'>
                      <a href={`/product/${item.productId}`}>{item.productName}</a>
                    </div>
                  </Col>
                  <Col span={4} className='cart-item__saleprice'>
                    {formatPrice(item.salePrice)}
                  </Col>
                  <Col span={4}>
                    <ProductQuantity item={item} onChange={handleQuantityChange} />
                  </Col>
                  <Col span={4} className='cart-item__totalprice'>
                    {!isNaN(item.quantity)
                      ? formatPrice(item.salePrice * item.quantity)
                      : formatPrice(0)}
                  </Col>
                  <Col span={2}>
                    <Popconfirm
                      title='Bạn có muốn xóa sản phẩm đang chọn?'
                      onConfirm={() => handleRemoveItem(item.id)}
                      okText='Xác nhận'
                      cancelText='Hủy'
                    >
                      <DeleteOutlined className='icon delete_icon' />
                    </Popconfirm>
                  </Col>
                </Row>
              </li>
            ))}
          </Checkbox.Group>
        </div>
      </>
    </DetailCartStyles>
  );
};
