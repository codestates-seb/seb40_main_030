import {
  DateFixedRouter,
  PrivateRouter,
  PublicRouter,
} from '@/components/@helper';
import { ROUTES } from '@/constants';

import Login from './Auth/Login';
import LoginRedirect from './Auth/LoginRedirect/index';
import Business from './Business';
import Home from './Home';
import MyPage from './MyPage';
import MyProfile from './MyPage/MyProfile';
import Notice from './MyPage/Notice';
import NotFound from './NotFound';
import Orders from './Orders';
import Payments from './Payments';
import PaymentCanceled from './PaymentState/PaymentCanceled';
import PaymentCompleted from './PaymentState/PaymentCompleted';
import PaymentFailed from './PaymentState/PaymentFailed';
import Rental from './Rental';
import Search from './Search';
import SearchAddress from './SearchAddress';
import SignUp from './SignUp';
import AdminSignUp from './SignUp/AdminSignUp';

type Route = {
  element: JSX.Element;
  name?: string;
  path?: string;
  children?: Route[];
};

const PAGES: Route[] = [
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
        element: <Orders />,
        path: ROUTES.ORDERS.PATH,
        name: ROUTES.ORDERS.NAME,
      },
      {
        element: <MyPage />,
        path: ROUTES.MY_PAGE.PATH,
        name: ROUTES.MY_PAGE.NAME,
      },
      {
        element: <PaymentCompleted />,
        path: ROUTES.PAYMENT_COMPLETED.PATH,
        name: ROUTES.PAYMENT_COMPLETED.NAME,
      },
      {
        element: <Payments />,
        path: ROUTES.PAYMENTS.PATH,
        name: ROUTES.PAYMENTS.NAME,
      },
      {
        element: <Notice />,
        path: ROUTES.NOTICE.PATH,
        name: ROUTES.NOTICE.NAME,
      },
      {
        element: <MyProfile />,
        path: ROUTES.MY_PROFILE.PATH,
        name: ROUTES.MY_PROFILE.NAME,
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
      {
        element: <SignUp />,
        path: ROUTES.SIGNUP.PATH,
        name: ROUTES.SIGNUP.NAME,
      },
      {
        element: <AdminSignUp />,
        path: ROUTES.ADMIN_SIGNUP.PATH,
        name: ROUTES.ADMIN_SIGNUP.NAME,
      },
    ],
  },
  {
    element: <SearchAddress />,
    path: ROUTES.SEARCH_ADDRESS.PATH,
    name: ROUTES.SEARCH_ADDRESS.NAME,
  },
  {
    element: <NotFound />,
    path: ROUTES.NOT_FOUND.PATH,
    name: ROUTES.NOT_FOUND.NAME,
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
    element: <PaymentCanceled />,
    path: ROUTES.PAYMENT_CANCELED.PATH,
    name: ROUTES.PAYMENT_CANCELED.NAME,
  },
  {
    element: <PaymentFailed />,
    path: ROUTES.PAYMENT_FAILED.PATH,
    name: ROUTES.PAYMENT_FAILED.NAME,
  },
  {
    element: <LoginRedirect />,
    path: ROUTES.LOGIN_REDIRECT.PATH,
    name: ROUTES.LOGIN_REDIRECT.NAME,
  },
];

export default PAGES;
