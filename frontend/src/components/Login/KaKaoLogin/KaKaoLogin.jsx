import { KaKaoLoginIcon } from '../../../assets';
import { KaKaoLoginBtn } from './KaKaoLogin.style';

const KakaoLogin = ({ loginClickHandler }) => {
  return (
    <KaKaoLoginBtn onClick={loginClickHandler}>
      <img src={KaKaoLoginIcon} />
    </KaKaoLoginBtn>
  );
};

export default KakaoLogin;
