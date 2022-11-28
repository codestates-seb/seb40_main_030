import { useGetStationById, useCurrentAddress, useSnackBar } from '@/hooks';
import NotFound from '@/pages/NotFound';

import { SnackBar } from '../@commons';
import BatteryInfo from './Features/BatteryInfo';
import * as S from './Features/Features.style';

const RentalStatus = ({ id }) => {
  const { data } = useGetStationById(id);
  const { isActive, message } = useSnackBar();

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
          {batteries
            .sort((a, b) => b.status - a.status)
            .map((content) => (
              <BatteryInfo
                key={content.batteryId}
                station={data}
                content={content}
              />
            ))}
          <SnackBar isActive={isActive} message={message} />
        </>
      )}
    </>
  );
};

export default RentalStatus;
