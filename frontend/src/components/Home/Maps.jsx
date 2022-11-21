import { ShadowButton } from '../@commons';
import KakaoMap from './KakaoMap/KakaoMap';
import { useNavigate } from 'react-router-dom';

import * as S from './Maps.style';
import { useIsPresent } from 'framer-motion';
import { ROUTES } from '../../constants';

const MapArea = () => {
  const isPresent = useIsPresent();
  const navigate = useNavigate();

  return (
    <S.Wrapper
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 1, transition: { duration: 1 } }}
      style={{ originX: isPresent ? 0 : 1 }}
    >
      {/* 상단에 검색창 추후 구현시 이자리 */}
      <KakaoMap />
    </S.Wrapper>
  );
};

export default MapArea;
