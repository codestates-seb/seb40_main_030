import {
  DateFixedRouter,
  PrivateRouter,
  PublicRouter,
} from '@/components/@helper';
import { ROUTES } from '@/constants';

import Business from './Business';
import Home from './Home';
import Login from './Login';
// import LoginRedirect from './LoginRedirect/index';
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
import SignUp from './SignUp';

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
    element: <SearchAddress />,
    path: ROUTES.SEARCH_ADDRESS.PATH,
    name: ROUTES.SEARCH_ADDRESS.NAME,
  },
  {
    element: <MyProfile />,
    path: ROUTES.MYPROFILE.PATH,
    name: ROUTES.MYPROFILE.NAME,
  },
  {
    element: <Notice />,
    path: ROUTES.NOTICE.PATH,
    name: ROUTES.NOTICE.NAME,
  },
  {
    element: <Business />,
    path: ROUTES.BUSINESS.PATH,
    name: ROUTES.BUSINESS.NAME,
  },
  {
    // PrivateRouter의 children Element들은 로그인이 완료된 유저에게만 보이는 페이지
    // 비로그인 유저가 접근시에는 /login 으로 리다이렉팅
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
      // {
      //   element: <Business />,
      //   path: ROUTES.BUSINESS.PATH,
      //   name: ROUTES.BUSINESS.NAME,
      // },
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
  {
    element: <PaymentCompleted />,
    path: ROUTES.PAYMENTCOMPLETED.PATH,
    name: ROUTES.PAYMENTCOMPLETED.NAME,
  },
];

export default PAGES;
