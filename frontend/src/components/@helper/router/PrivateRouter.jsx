import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { MESSAGE, ROUTES } from '@/constants';
import { useSnackBar } from '@/hooks';

const PrivateRouter = () => {
  const { openSnackBar } = useSnackBar();
  const isAuth = localStorage.getItem('loginState');

  useEffect(() => {
    if (!isAuth) {
      //  추후에 모달로 변경되야함
      openSnackBar(MESSAGE.NOT_AUTHENTICATED);
    }
  }, [isAuth]);

  return isAuth ? <Outlet /> : <Navigate to={ROUTES.LOGIN.PATH} replace />;
};

export default PrivateRouter;
