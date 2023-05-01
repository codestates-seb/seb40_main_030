import { DESKTOP_MEDIA_QUERY } from '@/constants';
import { useMediaQuery } from '@/hooks';

import { KakaoLoginMedium } from '../../../assets';
import { KaKaoLoginBtn } from './KaKaoLogin.style';

const KakaoLogin = ({ loginClickHandler }) => {
  const matches = useMediaQuery(DESKTOP_MEDIA_QUERY);

  return (
    <KaKaoLoginBtn onClick={loginClickHandler} matches={matches}>
      <img src={KakaoLoginMedium} alt='카카오 로그인 데스크탑' />
    </KaKaoLoginBtn>
  );
};

export default KakaoLogin;
