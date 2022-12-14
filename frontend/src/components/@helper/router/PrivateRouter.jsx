import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { MESSAGE, ROUTES } from '@/constants';
import { useSnackBar } from '@/hooks';

const PrivateRouter = () => {
  const { openSnackBar } = useSnackBar();
  // const isLocalAuth = localStorage.getItem('accesstoken');
  // const isSessionAuth = sessionStorage.getItem('accesstoken');
  const isLocalAuth = localStorage.getItem('accesstoken');
  const isSessionAuth = sessionStorage.getItem('accesstoken');

  useEffect(() => {
    if (!isLocalAuth && !isSessionAuth) {
      openSnackBar(MESSAGE.NOT_AUTHENTICATED);
    }
  }, [isSessionAuth, isLocalAuth]);

  return isLocalAuth || isSessionAuth ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTES.LOGIN.PATH} replace />
  );
};

export default PrivateRouter;
