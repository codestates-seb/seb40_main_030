import { Suspense } from 'react';

import { BatteryType } from '@/@types';
import { BatteryCharging, BatteryEmpty, SnackBar } from '@/components/@common';
import {
  useCurrentAddress,
  useSnackBar,
  useGetBatteryBySetTime,
} from '@/hooks';

import BatteryInfo from './Features/BatteryInfo';
import * as S from './Features/Features.style';

function RentalStatus({ id }: { id?: string }) {
  const { data: batteryData } = useGetBatteryBySetTime(Number(id));
  const { isActive, message } = useSnackBar();
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
              ?.sort((a, b) => {
                console.log('a', a, 'b', b);
                return b.status - a.status;
              })
              .map((content: BatteryType) => {
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
    </Suspense>
  );
}

export default RentalStatus;
