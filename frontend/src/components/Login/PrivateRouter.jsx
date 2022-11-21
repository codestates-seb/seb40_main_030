import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const PrivateRouter = () => {
  const isAuthenticated = JSON.parse(localStorage.getItem('loginState'));
  return (
    <>
      {isAuthenticated ? <Outlet /> : <Navigate to='/login' rereplace={true} />}
    </>
  );
};

export default PrivateRouter;
