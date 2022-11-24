import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { CurrentLocationIcon, SearchIcon } from '@/assets';
import { ROUTES } from '@/constants';
import {
  useCurrentLocation,
  useCurrentAddress,
  useTimeDifference,
} from '@/hooks';
import { currentLocationState } from '@/recoil/pagesState';

import * as S from './MapIndicator.style';

const MapIndicator = ({ toggle, setToggle }) => {
  const navigate = useNavigate();
  const { location } = useCurrentLocation();
  const [defaultLocation, setCurrentLocation] =
    useRecoilState(currentLocationState);
  // 위치값이 변경될 때마다 Indicator의 위치가 변경됨
  const { currentAddress } = useCurrentAddress(defaultLocation);
  const { days, hours } = useTimeDifference();

  return (
    <S.Wrapper>
      <S.LocationHover onClick={() => navigate(ROUTES.SEARCH.PATH)}>
        <SearchIcon />
        <span>{currentAddress}</span>
      </S.LocationHover>
      <S.ReservationHover>
        <span>
          {days
            ? `${days}일 ${hours}시간`
            : isNaN(days) && isNaN(hours)
            ? `설정시간 없음`
            : `${hours} 시간`}
        </span>
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