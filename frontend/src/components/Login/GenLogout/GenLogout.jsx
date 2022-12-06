// 일반 로그아웃 컴포넌트
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userInfoState } from '../../../recoil/userInfoState';
import { loginCheckState } from '../../../recoil/login';
import { nowState } from '../../../recoil/nowState';
import { LogoutBtn } from './GenLogout.style';

const GenLogout = () => {
  const navigate = useNavigate();
  const setCheckedLogin = useSetRecoilState(loginCheckState);
  const setUserInfo = useSetRecoilState(userInfoState);
  const setNow = useSetRecoilState(nowState);

  const onClickLogout = () => {
    sessionStorage.removeItem('accesstoken');
    localStorage.removeItem('accesstoken');
    localStorage.removeItem('refreshtoken');
    localStorage.removeItem('userType');
    sessionStorage.removeItem('userType');
    setCheckedLogin(false);
    setNow('');
    setUserInfo('');
    navigate('/');
  };

  return <LogoutBtn onClick={onClickLogout}>로그아웃</LogoutBtn>;
};

export default GenLogout;
