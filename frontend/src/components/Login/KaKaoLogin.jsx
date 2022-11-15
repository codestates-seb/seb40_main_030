import { KaKaoLoginImg } from '../../assets';
import useKakaoLogin from '../../hooks/Login/useKakaoLogin';

const KaKaoLogin = ({ clickHandler }) => {
  // useKakaoLogin();

  return (
    <button onClick={clickHandler}>
      <img src={KaKaoLoginImg} />
    </button>
  );
};

export default KaKaoLogin;
