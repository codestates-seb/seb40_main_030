import { Outlet } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { loginState } from '../../recoil/login';
import { Navigate } from 'react-router-dom';
const PrivateRouter = () => {
  const [isAuthorized, setIsAuthorized] = useRecoilState(loginState);
  const result = isAuthorized
    ? '로그인 o->test페이지로 이동'
    : '로그인 x->login페이지로 이동';
  console.log(result);
  return <>{isAuthorized ? <Outlet /> : <Navigate to='/login' />} </>;
};

export default PrivateRouter;
