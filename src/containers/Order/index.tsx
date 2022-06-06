import { Pagination } from 'antd';
import { orderApi } from 'api/orderApi';
import { Footer } from 'components/Footer';
import NavBar from 'components/Header';
import { Loading } from 'components/Loading';
import { Order } from 'interfaces';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { OrderDetail } from './components/OrderDetail';
import { OrderStyles } from './styles';

export const OrderPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [orders, setOrders] = useState<Order[]>();
  const customerId = Number(localStorage.getItem('id'));
  const [pagination, setPagination] = useState({
    page: 0,
    limit: 20,
    total: 20,
  });
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await orderApi.getApi(customerId, pagination);
      setOrders(data.data);
      setPagination(data.pagination);
      setLoading(false);
      setRefresh(false);
    })();
  }, [location.search, refresh]);

  const handlePageChange = (page: number) => {
    const queryParams = queryString.parse(location.search);
    const filter = {
      ...queryParams,
      page: page - 1,
    };
    setPagination({ ...pagination, page: page - 1 });
    navigate(`${location.pathname}?${queryString.stringify(filter)}`);
  };
  const handleOnRefresh = () => {
    setRefresh(true);
  };
  return (
    <OrderStyles>
      {loading ? (
        <Loading />
      ) : (
        <>
          <NavBar />
          <div className='content'>
            <OrderDetail
              orders={orders as any}
              customerId={customerId}
              onRefresh={handleOnRefresh}
            />
            <div className='product__pagination'>
              <Pagination
                total={pagination.total}
                defaultPageSize={20}
                style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}
                onChange={handlePageChange}
              />
            </div>
          </div>

          <Footer />
        </>
      )}
    </OrderStyles>
  );
};
