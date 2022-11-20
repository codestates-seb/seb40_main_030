import { Outlet } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Login from '../../pages/Login';
import { loginState } from '../../recoil/login';
import { Navigate } from 'react-router-dom';
const PrivateRouter = () => {
  // const isAuthorized = JSON.parse(localStorage.getItem('loginState'));
  // console.log('프라이빗에서 로그인값', isAuthorized);
  const [isAuthorized, setIsAuthorized] = useRecoilState(loginState);
  const result = isAuthorized
    ? '로그인 o->test페이지로 이동'
    : '로그인 x->login페이지로 이동';
  console.log(result);
  return <>{isAuthorized ? <Outlet /> : <Navigate to='/login' />} </>;
};

export default PrivateRouter;
