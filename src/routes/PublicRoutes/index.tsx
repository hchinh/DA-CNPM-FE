import LoginPage from 'containers/Auth/Login';
import RegisterPage from 'containers/Auth/Register';
import { Cart } from 'containers/Cart';
import { OrderPage } from 'containers/Order';
import { Payment } from 'containers/Payment';
import { Product } from 'containers/Product';
import { ProductDetail } from 'containers/ProductDetail';
import { ProfilePage } from 'containers/Profile';
import { Route } from 'react-router-dom';
import { TPublicRoutes } from 'routes/interface';

export const PUBLIC_ROUTES: TPublicRoutes = [
  {
    path: '/',
    element: <Product />,
    exact: true,
  },
  {
    path: '/product/:id',
    element: <ProductDetail />,
    exact: true,
  },
  {
    path: '/login',
    element: <LoginPage />,
    exact: true,
  },
  {
    path: '/register',
    element: <RegisterPage />,
    exact: true,
  },
  {
    path: '/cart',
    element: <Cart />,
    exact: true,
  },
  {
    path: '/checkout/payment',
    element: <Payment />,
    exact: true,
  },
  {
    path: '/order',
    element: <OrderPage />,
    exact: true,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
    exact: true,
  },
];

const publicRoutes = () => PUBLIC_ROUTES.map((route) => <Route {...route} key={route.path} />);

export default publicRoutes;
