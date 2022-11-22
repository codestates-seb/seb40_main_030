import { ROUTES } from '../constants';
import Home from './Home';
import NotFound from './NotFound';
import Login from './Login';
import PrivateRouter from '../components/@helper/router/PrivateRouter';
import PublicRouter from '../components/@helper/router/PublicRouter';
import Bussines from './Business';

const PAGES = [
  {
    element: <Home />,
    path: ROUTES.HOME.PATH,
    name: ROUTES.HOME.NAME,
  },
  {
    element: <Entrance />,
    path: ROUTES.ENTRANCE.PATH,
    name: ROUTES.ENTRANCE.NAME,
  },

  {
    element: <NotFound />,
    path: ROUTES.NOT_FOUND.PATH,
    name: ROUTES.NOT_FOUND.NAME,
  },
  {
    element: <Rental />,
    path: ROUTES.RENTAL.PATH,
    name: ROUTES.RENTAL.NAME,
  },

  {
    // PrivateRouter의 children Element들은 로그인이 완료된 유저에게만 보이는 페이지
    // 비로그인 유저가 접근시에는 /login 으로 리다이렉팅
    element: <PrivateRouter isAuthenticated={isAuthenticated} />,
    children: [
      {
        element: <Empty />,
        path: ROUTES.EMPTY.PATH,
        name: ROUTES.EMPTY.NAME,
      },
      {
        element: <Bussines />,
        path: ROUTES.BUSSINES.PATH,
        name: ROUTES.BUSSINES.NAME,
      },
    ],
  },
  {
    // 이미 로그인된 유저는 /signup , /login , /logout 접근 불가능
    // '/' 으로 리다이렉팅
    element: <PublicRouter isAuthenticated={isAuthenticated} />,
    children: [
      { element: <Login />, path: ROUTES.LOGIN.PATH, name: ROUTES.LOGIN.NAME },
    ],
  },
];

export default PAGES;
