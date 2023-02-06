import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { CurrentLocationIcon, SearchIcon } from '@/assets';
import { MESSAGE, ROUTES } from '@/constants';
import {
  useCurrentAddress,
  useTimeDifference,
  useSnackBar,
  useWatchLocation,
} from '@/hooks';
import { currentLocationState } from '@/recoil/pagesState';

import * as S from './MapIndicator.style';
import { useCallback } from 'react';
import { Coordinate } from '@/@types/maps';
import { Matches } from '@/@types';

type MapIndicatorProps = {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
  matches: Matches;
};

const MapIndicator = ({ toggle, setToggle, matches }: MapIndicatorProps) => {
  const navigate = useNavigate();
  const { location } = useWatchLocation();
  const [defaultLocation, setCurrentLocation] =
    useRecoilState(currentLocationState);
  const { currentAddress } = useCurrentAddress(defaultLocation);
  const { days, hours, minutes } = useTimeDifference();
  const { openSnackBar } = useSnackBar();

  const handleCurrentLocation = useCallback(
    (location: Coordinate) => {
      setCurrentLocation(location);
    },
    [defaultLocation]
  );

  return (
    <S.Wrapper matches={matches}>
      <S.LocationHover onClick={() => navigate(ROUTES.SEARCH.PATH)}>
        <SearchIcon />
        <span>
          {currentAddress.includes('undefined')
            ? '미확인 지역'
            : currentAddress}
        </span>
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
      <S.Button
        onClick={() => {
          if (Object.keys(location).length === 0) {
            openSnackBar(MESSAGE.CURRENT_LOCATION_NOT_EXIST);
            return;
          }

          location && handleCurrentLocation(location);
        }}
      >
        <CurrentLocationIcon />
      </S.Button>
    </S.Wrapper>
  );
};

export default MapIndicator;
