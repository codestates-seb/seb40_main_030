import { Matches } from '@/@types';
import { useIsPresent } from 'framer-motion';

import KakaoMap from './KakaoMap/KakaoMap';
import * as S from './Maps.style';

const MapArea = ({ matches }: { matches: Matches }) => {
  const isPresent = useIsPresent();

  return (
    <S.Wrapper
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 1, transition: { duration: 1 } }}
      style={{ originX: isPresent ? 0 : 1 }}
      matches={matches}
    >
      <KakaoMap matches={matches} />
    </S.Wrapper>
  );
};

export default MapArea;
