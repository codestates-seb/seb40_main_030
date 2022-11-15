import Layout from '../components/@layout/Layout';
import { ROUTES } from '../constants';
import Home from './Home';
import NotFound from './NotFound';
import Pay from './Pay'

const PAGES = [
  {
    element: <Layout />,
    children: [
      {
        element: <Home />,
        path: ROUTES.HOME.PATH,
        name: ROUTES.HOME.NAME,
      },
      {
        element: <Pay />,
        path: ROUTES.PAY.PATH,
        name: ROUTES.PAY.NAME,
      },
    ],
  },
  {
    element: <NotFound />,
    path: ROUTES.NOT_FOUND.PATH,
    name: ROUTES.NOT_FOUND.NAME,
  },
];

export default PAGES;