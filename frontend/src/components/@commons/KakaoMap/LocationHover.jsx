import { useRecoilValue } from 'recoil';
import useCurrentLocation from '../../../hooks/maps/useCurrentLocation';
import { currentLocationState } from '../../../recoil/pagesState';
import useCurrentAddress from '../../../hooks/maps/useCurrentAddress';

import * as S from './KakaoMap.style';

const LocationHover = () => {
  const defaultLocation = useRecoilValue(currentLocationState);
  const { location } = useCurrentLocation();
  const { currentAddress } = useCurrentAddress(
    location ? location : defaultLocation
  );

  return (
    <S.CurrentLocationContainer>
      <span>{currentAddress}</span>
    </S.CurrentLocationContainer>
  );
};

export default LocationHover;
