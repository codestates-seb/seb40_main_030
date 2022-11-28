import { useSetRecoilState } from 'recoil';

import { batteryFilterState } from '@/recoil/business';

import * as S from './Battery.style';

const BatteryStatus = ({ status, count }) => {
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
        <div>
          {status === 'total'
            ? '전체'
            : status === true
            ? '대여가능'
            : status === false
            ? '사용중'
            : null}
        </div>
        {typeof count === 'number' ? <div>{count}개</div> : null}
      </S.BatteryStatusContainer>
    </>
  );
};

export default BatteryStatus;
