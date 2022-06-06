import { Col, Row } from 'antd';
import { commentApi } from 'api/commentApi';
import { Comment, ListParams } from 'interfaces';
import React, { useEffect, useState } from 'react';
import { AddComment } from './components/AddComment';
import { CommentList } from './components/CommentList';
import { CommentStyles } from './styles';

interface Prop {
  productId: number;
}
export const CommentComponent: React.FC<Prop> = ({ productId }) => {
  const [comments, setComments] = useState<Comment[]>();
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    page: 0,
    limit: 5,
    total: 20,
  });
  useEffect(() => {
    (async () => {
      const data = await commentApi.getApi({ productId, ...pagination });
      setComments(data.data as any);
      setPagination(data.pagination);
      setLoading(false);
    })();
  }, [pagination.page, refresh]);

  const handlePageChange = (page: number) => {
    setPagination({ ...pagination, page: page - 1 });
  };
  const handleOnSubmit = () => {
    setRefresh(!refresh);
  };
  return (
    <>
      {loading ? (
        ''
      ) : (
        <CommentStyles>
          <div className='comment'>
            <Row justify='space-between'>
              <Col span={14}>
                <CommentList
                  comments={comments as any}
                  paginChange={handlePageChange}
                  pagination={pagination}
                />
              </Col>
              <Col span={8} style={{ marginTop: '10px' }}>
                <AddComment productId={productId} onSubmit={handleOnSubmit} />
              </Col>
            </Row>
          </div>
        </CommentStyles>
      )}
    </>
  );
};
