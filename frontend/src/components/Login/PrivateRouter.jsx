import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({ isAuthorized }) => {
  return (
    <>{isAuthorized ? <Outlet /> : <Navigate to='/login' replace={true} />}</>
  );
};

export default PrivateRouter;
