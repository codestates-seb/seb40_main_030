import { useIsPresent } from 'framer-motion';

import { Matches } from '@/@types';

import KakaoMap from './KakaoMap/KakaoMap';
import Wrapper from './Maps.style';

function MapArea({ matches }: { matches: Matches }) {
  const isPresent = useIsPresent();

  return (
    <Wrapper
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 1, transition: { duration: 1 } }}
      style={{ originX: isPresent ? 0 : 1 }}
      matches={matches}
    >
      <KakaoMap matches={matches} />
    </Wrapper>
  );
}

export default MapArea;
