import { useSetRecoilState } from 'recoil';

import { batteryFilterState } from '@/recoil/business';

import * as S from './Battery.style';

const BatteryStatus = ({ status, count, textState }) => {
  const setSelectedFilter = useSetRecoilState(batteryFilterState);

  const clickHandler = () => {
    setSelectedFilter(status);
  };

  return (
    <>
      <S.BatteryStatusContainer
        onClick={count ? clickHandler : null}
        status={status}
        count={count}
      >
        <div className='status-color' />
        <div className='status-title'>
          {textState &&
            (status === 'total'
              ? '전체'
              : status === true
              ? '대여가능'
              : status === false
              ? '사용중'
              : null)}
        </div>
      </S.BatteryStatusContainer>
    </>
  );
};

export default BatteryStatus;
