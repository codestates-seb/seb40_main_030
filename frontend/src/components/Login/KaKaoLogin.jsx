import { KaKaoLoginImg } from '../../assets';
import useKakaoLogin from '../../hooks/Login/useKakaoLogin';

const KakaoLogin = () => {
  const { loginClickHandler } = useKakaoLogin();

  return (
    <button onClick={loginClickHandler}>
      <img src={KaKaoLoginImg} />
    </button>
  );
};

export default KakaoLogin;
