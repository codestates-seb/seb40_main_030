import BatteryCharging from '../../@commons/Loading/BatteryCharging';
import * as S from './SplashScreen.style';

const SplashScreen = () => {
  return (
    <S.Wrapper>
      {/* 추후 적합한 Splash 화면으로 변경필요 */}
      <BatteryCharging />
    </S.Wrapper>
  );
};

export default SplashScreen;
