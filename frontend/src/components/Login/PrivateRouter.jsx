import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
const PrivateRouter = ({ when, message, path }) => {
  useEffect(() => {
    if (!when) {
      alert(message);
    }
  }, [when]);
  return <>{when ? <Outlet /> : <Navigate to={path} replace={true} />}</>;
};

export default PrivateRouter;
//when
