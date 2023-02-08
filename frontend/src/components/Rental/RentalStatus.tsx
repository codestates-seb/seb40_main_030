import { useCurrentAddress, useSnackBar } from '@/hooks';
import useGetBatteryBySetTime from '@/hooks/reservation/useGetBatteryBySetTIme';

import { BatteryEmpty, SnackBar } from '../@commons';
import BatteryInfo from './Features/BatteryInfo';
import * as S from './Features/Features.style';

const RentalStatus = ({ id }: { id: string | number }) => {
  const { data: batteryData } = useGetBatteryBySetTime(id);

  const { isActive, message } = useSnackBar();
  const { location, batteries } = batteryData;
  const { addressDetail } = useCurrentAddress(location);

  return (
    <>
      <div className='scrollable-component'>
        {batteries.length === 0 ? (
          <BatteryEmpty />
        ) : (
          <>
            <S.AddressDetail>
              <span>{addressDetail}</span>
            </S.AddressDetail>
            {batteries
              ?.sort((a: any, b: any) => b.status - a.status)
              .map((content: any) => {
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
    </>
  );
};

export default RentalStatus;
