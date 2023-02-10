import { Suspense } from 'react';
import {
  useCurrentAddress,
  useSnackBar,
  useGetBatteryBySetTime,
} from '@/hooks';
import { BatteryType } from '@/@types';
import { BatteryCharging, BatteryEmpty, SnackBar } from '@/components/@common';
import BatteryInfo from './Features/BatteryInfo';
import * as S from './Features/Features.style';

const RentalStatus = ({ id }: { id?: string }) => {
  const { data: batteryData } = useGetBatteryBySetTime(Number(id));
  const { isActive, message } = useSnackBar();
  //@ts-ignore
  const { location, batteries } = batteryData;
  const { addressDetail } = useCurrentAddress(location);

  return (
    <Suspense fallback={<BatteryCharging />}>
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
              .map((content: BatteryType) => {
                return (
                  <BatteryInfo
                    key={content.batteryId}
                    // @ts-ignore
                    station={batteryData}
                    content={content}
                  />
                );
              })}
            <SnackBar isActive={isActive} message={message} />
          </>
        )}
      </div>
    </Suspense>
  );
};

export default RentalStatus;
