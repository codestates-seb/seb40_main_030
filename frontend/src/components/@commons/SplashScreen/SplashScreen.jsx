import BatteryCharging from '@/components/@commons/Loading/BatteryCharging';

import * as S from './SplashScreen.style';

const SplashScreen = ({ matches }) => {
  return (
    <S.Wrapper matches={matches}>
      {/* 추후 적합한 Splash 화면으로 변경필요 */}
      {matches && (
        <S.DesktopMessage>
          본 웹페이지는 모바일에 최적화 되어있습니다.
        </S.DesktopMessage>
      )}
      <BatteryCharging />
    </S.Wrapper>
  );
};

export default SplashScreen;
