import Layout from '../components/@layout/Layout';
import { ROUTES } from '../constants';
import Home from './Home';
import NotFound from './NotFound';
import Login from './Login';
import Logout from './Logout/index';
import Entrance from './Entrance/index';
import Empty from './Empty/index';
import SignUp from '../components/Login/SignUp';
import PrivateRouter from '../components/Login/PrivateRouter';
import PublicRouter from '../components/Login/PublicRouter';

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
    ],
  },

  {
    element: <PublicRouter />,
    children: [
      {
        element: <Entrance />,
        path: ROUTES.ENTRANCE.PATH,
        name: ROUTES.ENTRANCE.NAME,
      },
      { element: <Login />, path: ROUTES.LOGIN.PATH, name: ROUTES.LOGIN.NAME },
      { element: <Empty />, path: ROUTES.EMPTY.PATH, name: ROUTES.EMPTY.NAME },
    ],
  },
  {
    element: <NotFound />,
    path: ROUTES.NOT_FOUND.PATH,
    name: ROUTES.NOT_FOUND.NAME,
  },
];

export default PAGES;
