import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { loginState } from '../../recoil/login';
import { useRecoilState } from 'recoil';

const PrivateRouter = () => {
  const [isAuthorized, setIsAuthorized] = useRecoilState(loginState);
  console.log('isAuthorized', isAuthorized);
  return (
    <>{isAuthorized ? <Outlet /> : <Navigate to='/login' rereplace={true} />}</>
  );
};

export default PrivateRouter;
