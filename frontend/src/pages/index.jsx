import Layout from '../components/@layout/Layout';
import { ROUTES } from '../constants';
import Home from './Home';
import NotFound from './NotFound';
import Login from './Login';
import Logout from './Logout/index';
import SignUp from '../components/Login/SignUp';
import PrivateRouter from '../components/Login/PrivateRouter';
import PublicRouter from '../components/Login/PublicRouter';
import Business from './Business';
import Pay from './Pay';
import ItemsList from './Items';

const PAGES = [
  {
    element: <Layout />,
    children: [
      {
        element: <Home />,
        path: ROUTES.HOME.PATH,
        name: ROUTES.HOME.NAME,
      },
    ],
  },
  { element: <SignUp />, path: ROUTES.SIGNUP.PATH, name: ROUTES.SIGNUP.NAME },

  {
    element: <PrivateRouter />,
    children: [
      {
        element: <Logout />,
        path: ROUTES.LOGOUT.PATH,
        name: ROUTES.LOGOUT.NAME,
      },
      {
        element: <Business />,
        path: ROUTES.BUSINESS.PATH,
        name: ROUTES.BUSINESS.NAME,
      },
    ],
  },

  {
    element: <PublicRouter />,
    children: [
      { element: <Login />, path: ROUTES.LOGIN.PATH, name: ROUTES.LOGIN.NAME },
    ],
  },

  {
    element: <NotFound />,
    path: ROUTES.NOT_FOUND.PATH,
    name: ROUTES.NOT_FOUND.NAME,
  },
  {
    element: <Pay />,
    path: ROUTES.PAY.PATH,
    name: ROUTES.PAY.NAME,
  },
  {
    element: <ItemsList />,
    path: ROUTES.ITEMSLIST.PATH,
    name: ROUTES.ITEMSLIST.PATH,
  }
];

export default PAGES;
