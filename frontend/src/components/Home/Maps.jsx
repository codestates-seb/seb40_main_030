import { useState } from 'react';
import useKakaoMap from '../../hooks/maps/useKakaoMap';
import Location from '../@commons/KakaoMap/Location';
import KakaoMap from '../@commons/KakaoMap/KakaoMap';

import * as S from './Maps.style';
import { useSetRecoilState } from 'recoil';
import { currentLocationState } from '../../recoil/pagesState';

const MapArea = () => {
  const [toggle, setToggle] = useState(false);
  const setLocation = useSetRecoilState(currentLocationState);

  return (
    <S.Wrapper>
      <S.Button
        type='button'
        onClick={() => setToggle(!toggle)}
        title='지도 보기'
        value={toggle ? '지도로 보기' : '로드뷰'}
      >
        <span>{toggle ? '지도로 보기' : '로드뷰'}</span>
      </S.Button>
      <S.Button
        type='button'
        onClick={() =>
          setLocation({ latitude: 33.450701, longitude: 126.570667 })
        }
        title='이동하기'
        value={'이동하기'}
        style={{ left: 100 }}
      >
        <span>{'이동하기'}</span>
      </S.Button>
      {/* <header>Geolocation API</header>
      <p>Current Location</p>
      <Location location={currentLocation} error={currentLocationError} />

      <p>Watch position: (Status: {isWatchingForLocation.toString()})</p>
      <Location location={location} error={error} /> */}
      <KakaoMap location={location} toggle={toggle} />
    </S.Wrapper>
  );
};

export default MapArea;
