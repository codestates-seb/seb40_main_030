import { useRecoilState } from 'recoil';

import { accessToken, refreshToken } from '@/recoil/login';

const useOauthLogout = () => {
  const [accessTokenValue, setAccessTokenValue] = useRecoilState(accessToken);
  const [refreshTokenValue, setRefreshTokenValue] =
    useRecoilState(refreshToken);
  //로그아웃 요청 백엔드로 보내면 백엔드에서 토큰 만료와 세션만료까지 시켜서 프론트로 응답을 보내줌
  //성공 응답이 올때 로그아웃 처리진행
  //프론트에 저장되어있는 로컬스토리지에 accessToken , refreshToken 둘다 삭제
  return;
};

export default useOauthLogout;
