import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { loginState } from '../../recoil/login';
import { useRecoilState } from 'recoil';

const PublicRouter = () => {
  const [isAuthorized, setIsAuthorized] = useRecoilState(loginState);
  console.log('isAuthorized', isAuthorized);
  return (
    <>{isAuthorized ? <Navigate to='/' rereplace={true} /> : <Outlet />} </>
  );
};

export default PublicRouter;
