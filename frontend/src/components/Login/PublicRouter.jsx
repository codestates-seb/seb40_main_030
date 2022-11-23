import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
const PublicRouter = ({ when, message, path }) => {
  useEffect(() => {
    if (when) {
      alert(message);
    }
  }, [when]);
  return <>{when ? <Navigate to={path} replace={true} /> : <Outlet />} </>;
};

export default PublicRouter;
