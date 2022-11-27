import { useGetStationById, useCurrentAddress } from '@/hooks';
import NotFound from '@/pages/NotFound';

import BatteryInfo from './Features/BatteryInfo';
import * as S from './Features/Features.style';

const RentalStatus = ({ id }) => {
  const { data } = useGetStationById(id);

  const { location, batteries } = data;
  const { addressDetail } = useCurrentAddress(location);

  return (
    <>
      {batteries.length === 0 ? (
        <NotFound
          message='배터리가 없어요'
          button={false}
          bgColor='#fff'
          color='black'
        />
      ) : (
        <>
          <S.AddressDetail>
            <span>{addressDetail}</span>
          </S.AddressDetail>
          {batteries.map((content) => (
            <BatteryInfo
              key={content.batteryId}
              station={data}
              content={content}
            />
          ))}
        </>
      )}
    </>
  );
};

export default RentalStatus;
