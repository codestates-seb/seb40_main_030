// 일반 로그아웃 컴포넌트
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userInfoState } from '../../../recoil/userInfoState';

import { kakaoLogout } from '@/apis/auth';

import { loginCheckState } from '../../../recoil/login';
import { nowState } from '../../../recoil/nowState';
import { LogoutBtn } from './GenLogout.style';

const GenLogout = () => {
  const navigate = useNavigate();
  const setCheckedLogin = useSetRecoilState(loginCheckState);
  const setUserInfo = useSetRecoilState(userInfoState);
  const setNow = useSetRecoilState(nowState);

  const onClickLogout = () => {
    const loginType = localStorage.getItem('loginType');
    if (loginType === 'kakao') {
      const accessToken = localStorage.getItem('accesstoken');
      kakaoLogout(accessToken).then((res) => {
        sessionStorage.removeItem('accesstoken');
        localStorage.removeItem('accesstoken');
        localStorage.removeItem('refreshtoken');
        localStorage.removeItem('userType');
        localStorage.removeItem('loginType');
        sessionStorage.removeItem('userType');
        setCheckedLogin(false);
        setNow('');
        setUserInfo('');
        window.location.assign(import.meta.env.VITE_KAKAO_ACCOUNT_LOGOUT_URL);
      });
    } else {
      sessionStorage.removeItem('accesstoken');
      localStorage.removeItem('accesstoken');
      localStorage.removeItem('refreshtoken');
      localStorage.removeItem('userType');
      sessionStorage.removeItem('userType');
      setCheckedLogin(false);
      setNow('');
      setUserInfo('');
      navigate('/');
    }
  };

  return <LogoutBtn onClick={onClickLogout}>로그아웃</LogoutBtn>;
};

export default GenLogout;
