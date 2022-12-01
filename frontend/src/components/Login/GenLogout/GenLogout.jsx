// 일반 로그아웃 컴포넌트
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { LogoutBtn } from './GenLogout.style';

const GenLogout = () => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    sessionStorage.removeItem('accesstoken');
    localStorage.removeItem('accesstoken');
    localStorage.removeItem('refreshtoken');
    navigate('/');
  };
  // if(!accesstoken && refreshtoken){
  //   서버로 refreshtoken 보내고 엑세스토큰 받아옴!
  // }
  return <LogoutBtn onClick={onClickLogout}>로그아웃</LogoutBtn>;
};

export default GenLogout;
