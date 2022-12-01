import { useRecoilState } from 'recoil';

import { accessToken, refreshToken } from '@/recoil/login';

const useOauthLogout = () => {
  const [accessTokenValue, setAccessTokenValue] = useRecoilState(accessToken);
  const [refreshTokenValue, setRefreshTokenValue] =
    useRecoilState(refreshToken);

  return;
};

export default useOauthLogout;
