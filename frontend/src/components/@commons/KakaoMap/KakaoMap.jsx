import { Map } from 'react-kakao-maps-sdk';
import KakaoRoadView from './RoadView';
import * as S from './KakaoMap.style';
import { useRecoilValue } from 'recoil';
import { currentLocationState } from '../../../recoil/pagesState';
import useGetAllZones from '../../../hooks/maps/useGetAllZones';
import MarkerContainer from './MarkerContainer';

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
            {zones.map((content) => (
              <MarkerContainer key={content.zoneId} content={content} />
            ))}
          </Map>
        ) : (
          <KakaoRoadView location={{ latitude, longitude }} />
        )}
      </S.MapWrapper>
    );
  }
};

export default KakaoMap;
