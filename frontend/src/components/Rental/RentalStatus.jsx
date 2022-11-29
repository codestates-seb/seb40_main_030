import {
  useCheckValidReserveTable,
  useCurrentAddress,
  useSnackBar,
} from '@/hooks';
import useGetBatteryBySetTime from '@/hooks/reservation/useGetBatteryBySetTIme';
import NotFound from '@/pages/NotFound';

import { SnackBar } from '../@commons';
import BatteryInfo from './Features/BatteryInfo';
import * as S from './Features/Features.style';

const RentalStatus = ({ id }) => {
  const { startPoint, endPoint } = useCheckValidReserveTable();

  const { data: batteryData } = useGetBatteryBySetTime(id, {
    startTime: startPoint.replace(' ', 'T'),
    endTime: endPoint.replace(' ', 'T'),
  });

  const { isActive, message } = useSnackBar();

  const { location, batteries } = batteryData;
  const { addressDetail } = useCurrentAddress(location);

  return (
    <div className='scrollable-component'>
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
            .map((content) => {
              return (
                <BatteryInfo
                  key={content.batteryId}
                  station={batteryData}
                  content={content}
                />
              );
            })}
          <SnackBar isActive={isActive} message={message} />
        </>
      )}
    </div>
  );
};

export default RentalStatus;
