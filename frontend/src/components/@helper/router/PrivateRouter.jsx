import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { MESSAGE, ROUTES } from '@/constants';
import { useSnackBar } from '@/hooks';

const PrivateRouter = () => {
  const { openSnackBar } = useSnackBar();
  const isLocalAuth = localStorage.getItem('accesstoken');
  const isSessionAuth = sessionStorage.getItem('accesstoken');

  useEffect(() => {
    if (!isLocalAuth && !isSessionAuth) {
      //  추후에 모달로 변경되야함
      openSnackBar(MESSAGE.NOT_AUTHENTICATED);
    }
  }, [isLocalAuth, isSessionAuth]);

  return isLocalAuth || isSessionAuth ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTES.LOGIN.PATH} replace />
  );
};

export default PrivateRouter;
