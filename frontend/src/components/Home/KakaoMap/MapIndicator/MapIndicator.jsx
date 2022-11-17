import { useRecoilState } from 'recoil';
import { currentLocationState } from '../../../../recoil/pagesState';
import { useCurrentLocation, useCurrentAddress } from '../hooks';
import { CurrentLocationIcon } from '../../../../assets';

import * as S from './MapIndicator.style';

const MapIndicator = ({ toggle, setToggle }) => {
  const { location } = useCurrentLocation();
  const [defaultLocation, setCurrentLocation] =
    useRecoilState(currentLocationState);
  const { currentAddress } = useCurrentAddress(
    location ? location : defaultLocation
  );

  return (
    <S.Wrapper>
      <S.LocationHover>
        <span>{currentAddress}</span>
      </S.LocationHover>
      <S.ReservationHover>
        <span>2시간</span>
      </S.ReservationHover>

      <S.IndicatorContainer>
        <S.Button
          type='button'
          onClick={() => setToggle(!toggle)}
          title='지도 보기'
        >
          <span>{toggle ? '지도로 보기' : '로드뷰'}</span>
        </S.Button>
        <S.LocationMarker
          type='image'
          src={CurrentLocationIcon}
          onClick={() => location && setCurrentLocation(location)}
        />
      </S.IndicatorContainer>
    </S.Wrapper>
  );
};

export default MapIndicator;
