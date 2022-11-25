import { useGetStationById } from '@/hooks';
import NotFound from '@/pages/NotFound';

import { useCurrentAddress } from '../../hooks';
import BatteryInfo from './Features/BatteryInfo';

const RentalStatus = ({ id }) => {
  const { data } = useGetStationById(id);

  // hooks 로 분리
  const { location, batteries } = data;
  const { addressDetail } = useCurrentAddress(location);
  // 추후 적용될 부분
  addressDetail;

  // 필요한 정보 주유소 이름 , 예약시간 , 유저 Id, 배터리 Id

  return (
    <>
      {batteries.length === 0 ? (
        <NotFound message='배터리가 없어요 ' />
      ) : (
        batteries.map((content) => (
          <BatteryInfo
            key={content.batteryId}
            station={data}
            content={content}
          />
        ))
      )}
    </>
  );
};

export default RentalStatus;
