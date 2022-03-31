import { Pagination } from 'antd';
import productApi from 'api/productApi';
import { Footer } from 'components/Footer';
import NavBar from 'components/Header';
import { Loading } from 'components/Loading';
import { Product as ProductI } from 'interfaces';
import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ProductFilter } from './components/ProductFilter';
import { ProductList } from './components/ProductList';
import { Slider } from './components/Slider';
import ProductWrapper from './style';

export const Product = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [productList, setProductList] = useState([] as ProductI[]);
  const [pagination, setPagination] = useState({
    page: 0,
    limit: 20,
    total: 20,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      page: Number(params.page) || 0,
      limit: Number(params.limit) || 20,
    };
  }, [location.search]);
  useEffect(() => {
    (async () => {
      try {
        const data = await productApi.getAll(queryParams);
        setProductList(data.data);
        setPagination(data.pagination);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    })();
  }, [queryParams]);

  const handlePageChange = (page: number) => {
    const filter = {
      ...queryParams,
      page: page - 1,
    };
    navigate(`${location.pathname}?${queryString.stringify(filter)}`);
  };

  const handleFilterChange = (newFilters: any) => {
    const filters = {
      ...queryParams,
      page: 0,
      ...newFilters,
    };
    navigate(`${location.pathname}?${queryString.stringify(filters)}`);
  };
  return (
    <ProductWrapper>
      {loading ? (
        <Loading />
      ) : (
        <>
          <NavBar />
          <Slider />
          <ProductFilter onChange={handleFilterChange} />
          <div className='container'>
            <div className='grid'>
              <div className='grid__row'>
                <ProductList listData={productList} />
              </div>
              <div className='product__pagination'>
                <Pagination
                  defaultCurrent={1}
                  total={pagination.total}
                  defaultPageSize={20}
                  current={pagination.page}
                  style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}
                  onChange={handlePageChange}
                />
              </div>
            </div>
          </div>

          <Footer />
        </>
      )}
    </ProductWrapper>
  );
};
