import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@/constants';
import { useSnackBar } from '@/hooks';

const PrivateRouter = () => {
  const { openSnackBar } = useSnackBar();
  const isAuth = localStorage.getItem('loginState');

  useEffect(() => {
    if (!isAuth) {
      //  추후에 모달로 변경되야함
      openSnackBar('로그인 후 이용 가능한 서비스 입니다.');
    }
  }, [isAuth]);

  return isAuth ? <Outlet /> : <Navigate to={ROUTES.LOGIN.PATH} replace />;
};

export default PrivateRouter;
