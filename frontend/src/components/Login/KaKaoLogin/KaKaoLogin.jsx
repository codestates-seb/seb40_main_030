import { KaKaoLoginImg } from '../../../assets';
import { KaKaoLoginBtn } from './KaKaoLogin.style';

const KakaoLogin = ({ loginClickHandler }) => {
  return (
    <KaKaoLoginBtn onClick={loginClickHandler}>
      <img src={KaKaoLoginImg} />
    </KaKaoLoginBtn>
  );
};

export default KakaoLogin;
