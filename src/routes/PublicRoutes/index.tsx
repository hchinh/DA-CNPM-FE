import { Login } from 'containers/Auth/components/Login';
import { Register } from 'containers/Auth/components/Register';
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
    element: <Login />,
    exact: true,
  },
  {
    path: '/register',
    element: <Register />,
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
