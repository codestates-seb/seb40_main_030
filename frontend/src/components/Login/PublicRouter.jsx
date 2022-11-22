import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { loginState } from '../../recoil/login';
import { useRecoilValue } from 'recoil';

const PublicRouter = () => {
  const isAuthorized = useRecoilValue(loginState);

  return <>{isAuthorized ? <Navigate to='/' replace={true} /> : <Outlet />} </>;
};

export default PublicRouter;
