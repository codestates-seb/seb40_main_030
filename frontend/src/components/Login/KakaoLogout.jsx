import { KaKaoLoginImg } from '../../assets';
import useKakaoLogout from '../../hooks/Login/useKakaoLogout';

const KakaoLogout = () => {
  const { logoutClickHandler } = useKakaoLogout();

  return (
    <button onClick={logoutClickHandler}>
      <img src={KaKaoLoginImg} />
    </button>
  );
};

export default KakaoLogout;
