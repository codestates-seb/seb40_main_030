import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRouter = ({ isAuthenticated }) => {
  useEffect(() => {
    if (isAuthenticated) {
      // 추후에 모달로 변경
      alert('로그인 상태에서 이용할수 없는 서비스입니다');
    }
  }, []);

  return isAuthenticated ? <Navigate to='/' replace /> : <Outlet />;
};

export default PublicRouter;
