import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { MESSAGE, ROUTES } from '@/constants';
import { useSnackBar } from '@/hooks';

const PublicRouter = () => {
  const { openSnackBar } = useSnackBar();
  const isAuth = localStorage.getItem('loginState');

  useEffect(() => {
    if (isAuth) {
      // 추후에 모달로 변경
      openSnackBar(MESSAGE.AUTHENTICATED);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  return isAuth ? <Navigate to={ROUTES.HOME.PATH} replace /> : <Outlet />;
};

export default PublicRouter;
