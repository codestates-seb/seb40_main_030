import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const PublicRouter = ({ isAuthorized }) => {
  return <>{isAuthorized ? <Navigate to='/' replace={true} /> : <Outlet />} </>;
};

export default PublicRouter;
