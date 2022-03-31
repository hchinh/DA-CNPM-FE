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
    element: <div>Login</div>,
    exact: true,
  },
  {
    path: '/register',
    element: <div>Register</div>,
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
