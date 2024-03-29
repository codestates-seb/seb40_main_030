import { LogoImage } from '@/assets';

import * as S from './SplashScreen.style';

const SplashScreen = ({ matches }: { matches: boolean }) => {
  return (
    <S.Wrapper
      matches={matches}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, transition: { duration: 5 } }}
    >
      {/* 추후 적합한 Splash 화면으로 변경필요 */}
      {matches && (
        <S.DesktopMessage>
          본 웹페이지는 모바일에 최적화 되어있습니다.
        </S.DesktopMessage>
      )}
      <S.SplashImageContainer>
        <S.SplashImage src={LogoImage} />
      </S.SplashImageContainer>
    </S.Wrapper>
  );
};

export default SplashScreen;
