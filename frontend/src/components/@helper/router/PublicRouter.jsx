import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@/constants';

const PublicRouter = () => {
  const isAuth = localStorage.getItem('loginState');

  useEffect(() => {
    if (isAuth) {
      // 추후에 모달로 변경
      alert('로그인 상태에서 이용할수 없는 서비스입니다.');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  return isAuth ? <Navigate to={ROUTES.HOME.PATH} replace /> : <Outlet />;
};

export default PublicRouter;
