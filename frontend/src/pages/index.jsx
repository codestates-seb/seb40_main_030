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
import Rental from './Rental';
import Search from './Search';
import Payments from './Payments';
import PaymentCompleted from './PaymentCompleted';

// 당장은 Layout 컴포넌트는 없고
// BottomNav 가 필요한 페이지는 해당 페이지에 import 해주시면 됩니다.

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
  {
    element: <PaymentCompleted />,
    path: ROUTES.PAYMENTCOMPLETED.PATH,
    name: ROUTES.PAYMENTCOMPLETED.NAME,
  }
];

export default PAGES;
