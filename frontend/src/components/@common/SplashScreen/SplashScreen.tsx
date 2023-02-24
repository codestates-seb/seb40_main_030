import { LogoImage } from '@/assets';
import { DESKTOP_MEDIA_QUERY } from '@/constants';
import { useMediaQuery } from '@/hooks';

import * as S from './SplashScreen.style';

function SplashScreen() {
  const matches = useMediaQuery(DESKTOP_MEDIA_QUERY);

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
}

export default SplashScreen;
