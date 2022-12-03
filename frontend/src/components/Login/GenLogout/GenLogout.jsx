// 일반 로그아웃 컴포넌트
import { useNavigate } from 'react-router-dom';
import { LogoutBtn } from './GenLogout.style';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../../recoil/userInfoState';
import { nowState } from '../../../recoil/nowState';

const GenLogout = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [now, setNow] = useRecoilState(nowState);

  const onClickLogout = () => {
    sessionStorage.removeItem('accesstoken');
    localStorage.removeItem('accesstoken');
    localStorage.removeItem('refreshtoken');
    localStorage.removeItem('userType');
    setNow('');
    setUserInfo('');
    navigate('/');
  };

  return <LogoutBtn onClick={onClickLogout}>로그아웃</LogoutBtn>;
};

export default GenLogout;
