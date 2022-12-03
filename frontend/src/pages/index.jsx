// import LoginRedirect from './LoginRedirect/index';
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
import MyPage from './MyPage';
import MyProfile from './MyProfile';
import NotFound from './NotFound';
import Notice from './Notice';
import Orders from './Orders';
import PaymentCompleted from './PaymentCompleted';
import Payments from './Payments';
import Rental from './Rental';
import Search from './Search';
import SearchAddress from './SearchAddress';
import AdminSignUp from './AdminSignUp';
import SignUp from './SignUp';

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
      {
        element: <MyPage />,
        path: ROUTES.MYPAGE.PATH,
        name: ROUTES.MYPAGE.NAME,
      },
      {
        element: <Orders />,
        path: ROUTES.ORDERS.PATH,
        name: ROUTES.ORDERS.NAME,
      },
      {
        element: <PaymentCompleted />,
        path: ROUTES.PAYMENTCOMPLETED.PATH,
        name: ROUTES.PAYMENTCOMPLETED.NAME,
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
        path: ROUTES.MYPROFILE.PATH,
        name: ROUTES.MYPROFILE.NAME,
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
  // { element: <Login />, path: ROUTES.LOGIN.PATH, name: ROUTES.LOGIN.NAME },
  // {
  //   element: <LoginRedirect />,
  //   path: ROUTES.LOGIN_REDIRECT.PATH,
  //   name: ROUTES.LOGIN_REDIRECT.NAME,
  // },
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
];

export default PAGES;
