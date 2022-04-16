import LoginPage from 'containers/Auth/Login';
import RegisterPage from 'containers/Auth/Register';
import { Product } from 'containers/Product';
import { ProductDetail } from 'containers/ProductDetail';
import { Route } from 'react-router-dom';
import { TPublicRoutes } from 'routes/interface';

export const PUBLIC_ROUTES: TPublicRoutes = [
  {
    path: '/',
    element: <Product />,
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
    path: '/product/:id',
    element: <ProductDetail />,
    exact: true,
  },
];

const publicRoutes = () => PUBLIC_ROUTES.map((route) => <Route {...route} key={route.path} />);

export default publicRoutes;
