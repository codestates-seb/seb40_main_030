import { Map } from 'react-kakao-maps-sdk';
import KakaoRoadView from './RoadView';
import * as S from './KakaoMap.style';
import { useRecoilValue } from 'recoil';
import { currentLocationState } from '../../../recoil/pagesState';
import useGetAllZones from '../../../hooks/maps/useGetAllZones';
import MarkerContainer from './MarkerContainer';
import LocationHover from './LocationHover';

// type Location = {
//   location: {
//     latitude: number;
//     longitude: number;
//   };
//   toggle: boolean;
// };

const KakaoMap = ({ toggle }) => {
  const { data: zones, isSuccess } = useGetAllZones();
  const currentLocation = useRecoilValue(currentLocationState);
  const latitude = currentLocation?.latitude || 37.4965;
  const longitude = currentLocation?.longitude || 127.0248;

  // location 기반 필터링시에 범위를 어디까지 할것인가를 알아봐야함

  if (isSuccess) {
    return (
      <S.MapWrapper>
        {!toggle ? (
          <Map
            center={{
              lat: latitude,
              lng: longitude,
            }}
            isPanto={true}
            style={{ width: '100%', height: '100%' }}
            level={3}
          >
            {zones.map((content) => (
              <MarkerContainer key={content.zoneId} content={content} />
            ))}
          </Map>
        ) : (
          <KakaoRoadView location={{ latitude, longitude }} />
        )}
        <LocationHover />
      </S.MapWrapper>
    );
  }
};

export default KakaoMap;
