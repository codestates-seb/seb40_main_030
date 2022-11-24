import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@/constants';

const PrivateRouter = ({ isAuthenticated }) => {
  useEffect(() => {
    if (!isAuthenticated) {
      //  추후에 모달로 변경되야함
      alert('로그인 후 사용해주세요');
    }
  }, [isAuthenticated]);

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTES.LOGIN.PATH} replace />
  );
};

export default PrivateRouter;
