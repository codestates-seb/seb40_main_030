import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { CurrentLocationIcon } from '../../assets';
import useCurrentLocation from '../../hooks/maps/useCurrentLocation';
import { currentLocationState } from '../../recoil/pagesState';
import KakaoMap from '../@commons/KakaoMap/KakaoMap';

import * as S from './Maps.style';

const MapArea = () => {
  const [toggle, setToggle] = useState(false);
  const { location } = useCurrentLocation();
  const setCurrentLocation = useSetRecoilState(currentLocationState);

  return (
    <S.Wrapper>
      <S.IndicatorContainer>
        <S.Button
          type='button'
          onClick={() => setToggle(!toggle)}
          title='지도 보기'
        >
          <span>{toggle ? '지도로 보기' : '로드뷰'}</span>
        </S.Button>

        <input
          type='image'
          src={CurrentLocationIcon}
          onClick={() => location && setCurrentLocation(location)}
        />
      </S.IndicatorContainer>
      {/* 상단에 검색창 추후 구현시 이자리 */}
      <KakaoMap toggle={toggle} />
    </S.Wrapper>
  );
};

export default MapArea;
