import { ArrowLeftOutlined } from '@ant-design/icons';
import commentApi from 'api/commentApi';
import productApi from 'api/productApi';
import { Footer } from 'components/Footer';
import NavBar from 'components/Header';
import { Loading } from 'components/Loading';
import { Comment, Product } from 'interfaces';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Comment as CommentComponent } from './components/Comment';
import { ProductInfor } from './components/ProductInfo';
import { ProductRelated } from './components/ProductRelated.tsx';
import { ProductDetailWrapper } from './styles';

import queryString from 'query-string';

export const ProductDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({} as Product);
  const [productRelatedList, setProductRelatedList] = useState([] as Product[]);
  const [comments, setComments] = useState<Comment[]>();
  const [pagination, setPagination] = useState({
    page: 0,
    limit: 5,
    total: 20,
  });

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      if (id) {
        const data = await productApi.getById(Number(id));
        setProduct(data);

        const productList = await productApi.getAll({
          categoryId: data.categoryId,
          page: 0,
          limit: 5,
        });
        const commentList = await commentApi.getApi({ productId: Number(id), ...pagination });
        setComments(commentList.data as any);
        setProductRelatedList(productList.data);
      }
      setLoading(false);
    })();
  }, [id]);

  useEffect(() => {
    (async () => {
      const data = await commentApi.getApi({ productId: Number(id), ...pagination });
      setComments(data.data as any);
      setPagination(data.pagination);
    })();
  }, [pagination.page]);

  const handlePageChange = (page: number) => {
    setPagination({ ...pagination, page: page - 1 });
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ProductDetailWrapper>
          <NavBar />
          <div className='container_productDetails'>
            <div className='grid__row'>
              <div className='grid__column5'>
                <div className='back_btn'>
                  <Link to={'/'} className='btn_back'>
                    <i>
                      <ArrowLeftOutlined />
                    </i>
                    Back
                  </Link>
                </div>
                {product.thumbnail ? (
                  <img
                    src={`data:image/png;base64,${product?.thumbnail}`}
                    alt=''
                    className='product_img'
                  />
                ) : (
                  <img src='../default.png'></img>
                )}
              </div>
              <div className='grid__column5'>
                <ProductInfor data={product} />
              </div>
              <div className='product-comments'>
                <div className='title'>Bình luận và nhận xét: </div>
                <CommentComponent
                  comments={comments as any}
                  productId={Number(id)}
                  pagination={pagination}
                  paginChange={handlePageChange}
                />
              </div>
              <div className='RelatedWapper'>
                <ProductRelated data={productRelatedList} />
              </div>
            </div>
          </div>
          <Footer />
        </ProductDetailWrapper>
      )}
    </>
  );
};
