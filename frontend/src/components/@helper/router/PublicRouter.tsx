import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { MESSAGE, ROUTES } from '@/constants';
import { useSnackBar } from '@/hooks';

function PublicRouter() {
  const { openSnackBar } = useSnackBar();
  const isLocalAuth = localStorage.getItem('accesstoken');
  const isSessionAuth = sessionStorage.getItem('accesstoken');

  useEffect(() => {
    if (isLocalAuth || isSessionAuth) {
      openSnackBar(MESSAGE.AUTHENTICATED);
    }
  }, [isSessionAuth, isLocalAuth]);

  return isLocalAuth || isSessionAuth ? (
    <Navigate to={ROUTES.HOME.PATH} replace />
  ) : (
    <Outlet />
  );
}

export default PublicRouter;
