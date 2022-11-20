import Layout from '../components/@layout/Layout';
import { ROUTES } from '../constants';
import Home from './Home';
import NotFound from './NotFound';
import Login from './Login';
import Logout from './Logout/index';
import Entrance from './Entrance/index';
import Empty from './Empty/index';
import SignUp from '../components/Login/SignUp';
import LogoutSession from './LogoutSession/index';
import PrivateRouter from '../components/Login/PrivateRouter';
import PrivateTest from './PrivateTest/index';

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
  {
    element: <Entrance />,
    path: ROUTES.ENTRANCE.PATH,
    name: ROUTES.ENTRANCE.NAME,
  },
  { element: <Login />, path: ROUTES.LOGIN.PATH, name: ROUTES.LOGIN.NAME },
  { element: <SignUp />, path: ROUTES.SIGNUP.PATH, name: ROUTES.SIGNUP.NAME },
  { element: <Logout />, path: ROUTES.LOGOUT.PATH, name: ROUTES.LOGOUT.NAME },
  {
    element: <LogoutSession />,
    path: ROUTES.LOGOUTSESSION.PATH,
    name: ROUTES.LOGOUTSESSION.NAME,
  },
  { element: <Empty />, path: ROUTES.EMPTY.PATH, name: ROUTES.EMPTY.NAME },
  {
    element: <PrivateRouter />,
    children: [
      {
        element: <PrivateTest />,
        path: ROUTES.PRIVATETEST.PATH,
        name: ROUTES.PRIVATETEST.NAME,
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
