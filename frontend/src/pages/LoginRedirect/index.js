import { useEffect } from 'react';

import useOauthLogin from '../../hooks/Login/useOauthLogin';

const LoginRedirect = () => {
  const { OauthLogin } = useOauthLogin();

  useEffect(() => {
    OauthLogin();
  }, []);
  return;
};

export default LoginRedirect;
