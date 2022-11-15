import { Map, MapMarker } from 'react-kakao-maps-sdk';
import KakaoRoadView from './RoadView';
import * as S from './KakaoMap.style';
import { useRecoilValue } from 'recoil';
import { currentLocationState } from '../../../recoil/pagesState';
import useGetAllZones from '../../../hooks/maps/useGetAllZones';

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
  const latitude = currentLocation?.latitude || 33.450701;
  const longitude = currentLocation?.longitude || 126.570667;

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
            {zones.map(({ zoneId, location, title }) => {
              return (
                <MapMarker
                  key={zoneId}
                  position={{
                    lat: location.latitude,
                    lng: location.longitude,
                  }}
                  title={title}
                />
              );
            })}
          </Map>
        ) : (
          <KakaoRoadView location={{ latitude, longitude }} />
        )}
      </S.MapWrapper>
    );
  }
};

export default KakaoMap;
