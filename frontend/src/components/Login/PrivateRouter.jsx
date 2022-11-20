import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const PrivateRouter = () => {
  const result = JSON.parse(localStorage.getItem('loginState'));
  result ? '로그인 o-> 페이지 이동 o' : '로그인 x->login페이지 이동';

  return <>{result ? <Outlet /> : <Navigate to='/login' />} </>;
};

export default PrivateRouter;
