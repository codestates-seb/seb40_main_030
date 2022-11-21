import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const PublicRouter = () => {
  const isAuthenticated = JSON.parse(localStorage.getItem('loginState'));
  return (
    <>{isAuthenticated ? <Navigate to='/' rereplace={true} /> : <Outlet />} </>
  );
};

export default PublicRouter;
