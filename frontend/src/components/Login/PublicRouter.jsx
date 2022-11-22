import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { loginState } from '../../recoil/login';
import { useRecoilState, useRecoilValue } from 'recoil';

const PublicRouter = () => {
  const isAuthorized = useRecoilValue(loginState);

  return (
    <>{isAuthorized ? <Navigate to='/' rereplace={true} /> : <Outlet />} </>
  );
};

export default PublicRouter;
