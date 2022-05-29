import { Pagination } from 'antd';
import { Comment, ListParams } from 'interfaces';
import React from 'react';
import { formatDate } from 'utils/common';
import { CommentStyles } from '../styles';

interface Props {
  comments: Comment[];
  pagination: ListParams;
  paginChange: (page: number) => void;
}

export const CommentList: React.FC<Props> = ({ comments, pagination, paginChange }) => {
  const handlePageChange = (page: number) => {
    if (!paginChange) return;
    paginChange(page);
  };
  return (
    <CommentStyles>
      <div className='comment-content'>
        {comments.map((comment) => (
          <div className='comment-item'>
            <div className='comment-info'>
              <p className='comment-creater'>
                <img src='../avatar.png' alt='avartar' />
                {comment.createdBy || 'User'}
              </p>

              <p className='comment-create-time'>{formatDate(comment.createdDate)}</p>
            </div>
            <div className='comment-item-content'>{comment.comment}</div>
          </div>
        ))}
      </div>
      <div className='product__pagination'>
        <Pagination
          total={pagination.total}
          defaultPageSize={pagination.limit}
          style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}
          onChange={handlePageChange}
        />
      </div>
    </CommentStyles>
  );
};
