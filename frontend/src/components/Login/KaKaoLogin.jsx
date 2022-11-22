import { KaKaoLoginImg } from '../../assets';

const KakaoLogin = ({ loginClickHandler }) => {
  return (
    <button onClick={loginClickHandler}>
      <img src={KaKaoLoginImg} />
    </button>
  );
};

export default KakaoLogin;
