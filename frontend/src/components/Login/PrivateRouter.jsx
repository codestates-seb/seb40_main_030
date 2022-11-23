import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { loginState } from '../../recoil/login';
import { useRecoilValue } from 'recoil';

const PrivateRouter = () => {
  const isAuthorized = useRecoilValue(loginState);

  return (
    <>{isAuthorized ? <Outlet /> : <Navigate to='/login' replace={true} />}</>
  );
};

export default PrivateRouter;
