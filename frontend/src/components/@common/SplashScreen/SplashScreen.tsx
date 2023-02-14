import { LogoImage } from '@/assets';

import * as S from './SplashScreen.style';

const SplashScreen = ({ matches }: { matches: boolean }) => {
  return (
    <S.Wrapper
      matches={matches}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, transition: { duration: 5 } }}
    >
      <S.SplashImageContainer>
        <S.SplashImage src={LogoImage} />
      </S.SplashImageContainer>
    </S.Wrapper>
  );
};

export default SplashScreen;
