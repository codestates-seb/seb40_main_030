// 일반 로그아웃 컴포넌트
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
// import { userMemberId } from '../../../recoil/userInfoState';
import { LogoutBtn } from './GenLogout.style';

const GenLogout = () => {
  const navigate = useNavigate();
  // const [userId, setUserId] = useRecoilState(userMemberId);

  const onClickLogout = () => {
    localStorage.removeItem('accesstoken'); // 전역상태저장
    localStorage.removeItem('refreshtoken'); // 쿠키에 저장
    // 로그인했을때 전역상태로 저장했던 memberId도 삭제해야함.
    // setUserId(0);
    navigate('/');
  };

  return <LogoutBtn onClick={onClickLogout}>로그아웃</LogoutBtn>;
};

export default GenLogout;
