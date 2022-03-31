import { ArrowLeftOutlined } from '@ant-design/icons';
import productApi from 'api/productApi';
import { Footer } from 'components/Footer';
import NavBar from 'components/Header';
import { Loading } from 'components/Loading';
import { Product } from 'interfaces/product';
import React, { useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { Link, useParams } from 'react-router-dom';
import { ProductInfor } from './components/ProductInfo';
import { ProductRelated } from './components/ProductRelated.tsx';
import { ProductDetailWrapper } from './styles';

export const ProductDetail = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({} as Product);
  const [productRelatedList, setProductRelatedList] = useState([] as Product[]);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      if (id) {
        const { data } = await productApi.get(Number(id));
        setProduct(data);

        const productList = await productApi.getAll({
          categoryId: data.categoryId,
          page: 0,
          limit: 5,
        });
        setProductRelatedList(productList.data);
      }
      setLoading(false);
    })();
  }, [id]);
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
                <img
                  src={`data:image/png;base64,${product?.thumbnail}`}
                  alt=''
                  className='product_img'
                />
              </div>
              <div className='grid__column5'>
                <ProductInfor data={product} />
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
