import { ArrowLeftOutlined } from '@ant-design/icons';
import productApi from 'api/productApi';
import { Footer } from 'components/Footer';
import NavBar from 'components/Header';
import LaunchScreen from 'components/LaunchScreen';
import { Loading } from 'components/Loading';
import { Product } from 'interfaces';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { CommentComponent } from './components/Comment';
import { ProductInfor } from './components/ProductInfo';
import { ProductRelated } from './components/ProductRelated.tsx';
import { ProductDetailWrapper } from './styles';

export const ProductDetail = () => {
  const location = useLocation();
  const [startloading, setStartLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({} as Product);
  const [productRelatedList, setProductRelatedList] = useState([] as Product[]);
  const customerId = localStorage.getItem('id');

  const { id } = useParams();

  const getData = async (productId: number, customerId: number) => {
    const data = await productApi.getById(productId);
    setProduct(data);

    const recommendList = await productApi.recommend(customerId, { limit: 5, page: 0 });
    setProductRelatedList(recommendList.data);
  };

  useEffect(() => {
    (async () => {
      if (id) {
        await getData(Number(id), Number(customerId) || 1);
        setStartLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (id) {
        setLoading(true);
        await getData(Number(id), Number(customerId) || 1);
        setLoading(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    })();
  }, [location.pathname]);

  return (
    <>
      {startloading ? (
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
                <CommentComponent productId={Number(id)} />
              </div>
              <div className='RelatedWapper'>
                <ProductRelated data={productRelatedList} />
              </div>
            </div>
          </div>
          <Footer />
          {loading && <LaunchScreen />}
        </ProductDetailWrapper>
      )}
    </>
  );
};
