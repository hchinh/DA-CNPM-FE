import { DeleteOutlined } from '@ant-design/icons';
import { Checkbox, Col, Popconfirm, Row } from 'antd';
import React from 'react';
import { DetailCartStyles } from '../styles';
interface Props {
  indeterminate: boolean;
  checkAll: boolean;
  totalSelected: number;
  onRemoves: () => void;
  onSelectedAll: (e: any) => void;
}
export const ProductToTal: React.FC<Props> = ({
  onRemoves,
  onSelectedAll,
  totalSelected,
  indeterminate,
  checkAll,
}) => {
  const handleRemoveItems = () => {
    if (onRemoves) onRemoves();
  };
  const handleSelectedAllChange = (e: any) => {
    if (onSelectedAll) onSelectedAll(e);
  };
  return (
    <DetailCartStyles>
      <Row className='detail-cart__nav'>
        <Col span={10}>
          <Checkbox
            onChange={handleSelectedAllChange}
            indeterminate={indeterminate}
            checked={checkAll}
            className='checkbox'
          ></Checkbox>
          Tất cả <span>{totalSelected}</span> sản phẩm
        </Col>
        <Col span={4}>Đơn giá</Col>
        <Col span={4}>Số lượng </Col>
        <Col span={4}>Thành tiền</Col>
        <Col span={2}>
          <Popconfirm
            title='Bạn có muốn xóa sản phẩm đang chọn?'
            onConfirm={() => handleRemoveItems()}
            okText='Xác nhận'
            cancelText='Hủy'
          >
            <DeleteOutlined className='icon delete_icon' />
          </Popconfirm>
        </Col>
      </Row>
    </DetailCartStyles>
  );
};
