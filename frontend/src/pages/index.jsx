import {
  DateFixedRouter,
  PrivateRouter,
  PublicRouter,
} from '@/components/@helper';
import { ROUTES } from '@/constants';

import Business from './Business';
import Home from './Home';
import Login from './Login';
import LoginRedirect from './LoginRedirect/index';
import Logout from './Logout/index';
import NotFound from './NotFound';
import Orders from './Orders';
import Payments from './Payments';
import Rental from './Rental';
import Search from './Search';

const PAGES = [
  {
    element: <LoginRedirect />,
    path: ROUTES.LOGIN_REDIRECT.PATH,
    name: ROUTES.LOGIN_REDIRECT.NAME,
  },
  {
    element: <Home />,
    path: ROUTES.HOME.PATH,
    name: ROUTES.HOME.NAME,
  },
  {
    element: <Search />,
    path: ROUTES.SEARCH.PATH,
    name: ROUTES.SEARCH.NAME,
  },
  {
    element: <Rental />,
    path: ROUTES.RENTAL.PATH,
    name: ROUTES.RENTAL.NAME,
  },

  {
    element: <NotFound />,
    path: ROUTES.NOT_FOUND.PATH,
    name: ROUTES.NOT_FOUND.NAME,
  },
  {
    element: <DateFixedRouter />,
    children: [
      {
        element: <Rental />,
        path: ROUTES.RENTAL.PATH,
        name: ROUTES.RENTAL.NAME,
      },
    ],
  },
  {
    element: <PrivateRouter />,
    children: [
      {
        element: <Business />,
        path: ROUTES.BUSINESS.PATH,
        name: ROUTES.BUSINESS.NAME,
      },
      {
        element: <Logout />,
        path: ROUTES.LOGOUT.PATH,
        name: ROUTES.LOGOUT.NAME,
      },
      {
        element: <Orders />,
        path: ROUTES.ORDERS.PATH,
        name: ROUTES.ORDERS.NAME,
      },
    ],
  },
  {
    element: <PublicRouter />,
    children: [
      {
        element: <Login />,
        path: ROUTES.LOGIN.PATH,
        name: ROUTES.LOGIN.NAME,
      },
    ],
  },
  // { element: <Login />, path: ROUTES.LOGIN.PATH, name: ROUTES.LOGIN.NAME },
  // {
  //   element: <LoginRedirect />,
  //   path: ROUTES.LOGIN_REDIRECT.PATH,
  //   name: ROUTES.LOGIN_REDIRECT.NAME,
  // },
  {
    element: <NotFound />,
    path: ROUTES.NOT_FOUND.PATH,
    name: ROUTES.NOT_FOUND.NAME,
  },
  {
    element: <Payments />,
    path: ROUTES.PAYMENTS.PATH,
    name: ROUTES.PAYMENTS.NAME,
  },
];

export default PAGES;
