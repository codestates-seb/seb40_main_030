import {
  DateFixedRouter,
  PrivateRouter,
  PublicRouter,
} from '@/components/@helper';
import { ROUTES } from '@/constants';

import Business from './Business';
import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';
import OrderList from './OrderList/OrderList';
import Payments from './Payments';
import Rental from './Rental';
import Search from './Search';

const PAGES = [
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
        element: <OrderList />,
        path: ROUTES.ORDER_LIST.PATH,
        name: ROUTES.ORDER_LIST.NAME,
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
    element: <Payments />,
    path: ROUTES.PAYMENTS.PATH,
    name: ROUTES.PAYMENTS.NAME,
  },
];

export default PAGES;
