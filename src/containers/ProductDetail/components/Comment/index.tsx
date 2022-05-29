import { Col, Row } from 'antd';
import commentApi from 'api/commentApi';
import { ListParams } from 'interfaces';
import React, { useEffect, useState } from 'react';
import { AddComment } from './components/AddComment';
import { CommentList } from './components/CommentList';
import { CommentStyles } from './styles';

interface Prop {
  comments: Comment[];
  productId: number;
  paginChange: (page: number) => void;
  pagination: ListParams;
}
export const Comment: React.FC<Prop> = ({ comments, productId, paginChange, pagination }) => {
  return (
    <CommentStyles>
      <div className='comment'>
        <Row justify='space-between'>
          <Col span={14}>
            <CommentList
              comments={comments as any}
              paginChange={paginChange}
              pagination={pagination}
            />
          </Col>
          <Col span={8}>
            <AddComment productId={productId} />
          </Col>
        </Row>
      </div>
    </CommentStyles>
  );
};
