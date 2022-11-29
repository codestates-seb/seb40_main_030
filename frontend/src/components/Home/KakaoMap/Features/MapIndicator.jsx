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
  const { currentAddress } = useCurrentAddress(defaultLocation);
  const { days, hours, minutes } = useTimeDifference();

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
            : `${hours}시간 ${minutes}분`}
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
      </S.IndicatorContainer>
      <S.Button onClick={() => location && setCurrentLocation(location)}>
        <CurrentLocationIcon />
      </S.Button>
    </S.Wrapper>
  );
};

export default MapIndicator;
